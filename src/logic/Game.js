import { DateTime } from "luxon";

import Rule from "./Rule";
import CharacterType from "./CharacterType";
import Character from "./Character";

export default class Game {
  constructor(
    speed = 1,
    duration = Game.DURATION,
    charachterAdditionChance = Game.CHARACTER_ADDITION_CHANCE
  ) {
    Object.assign(this, {
      isDonkey: false,
      characterTypes: CharacterType.characterTypes(speed),
      status: Game.STATUS.PENDING,
      characters: [],
      rules: [],
      duration,
      charachterAdditionChance,
    });
  }

  start() {
    this.status = Game.STATUS.RUNNING;
    this.rules = Game.generateRules();
    this.startTime = Date.now();
    this.paused = false;
    this.resetNextRule();
  }

  step() {
    if (this.paused) return;
    this.characters.forEach((charcter) => {
      if (charcter.location < Game.TRACK_END) charcter.move(Game.STEP);
    });
    if (Math.random() <= this.charachterAdditionChance) {
      this.characters.push(
        Character.createCharacter(
          this.characterTypes.filter((characterType) => !characterType.disabled)
        )
      );
    }
    if (this.shouldSetNextRule) {
      this.setNextRule();
    }
    if (this.time <= 0) {
      this.finish();
    }
  }

  pause() {
    this.puaseTime = Date.now();
    this.paused = true;
  }

  resume() {
    this.startTime = this.startTime + Date.now() - this.puaseTime;
    this.paused = false;
    this.resetNextRule();
  }

  get time() {
    if (this.paused) {
      return this.duration - (this.puaseTime - this.startTime) / 1000;
    }
    return this.duration - (Date.now() - this.startTime) / 1000;
  }

  get score() {
    return this.characters.filter(
      (charcter) => charcter.location >= Game.TRACK_END
    ).length;
  }

  get bonusScore() {
    if (this.charactersDone().length > 0) return this.calculateBonus();
    return 0;
  }

  get shouldSetNextRule() {
    return (
      !this.nextRule &&
      (this.hasMoreRulesInBatch ||
        (Date.now() - this.lastRuleTime) / 1000 > Game.RULES_DELAY)
    );
  }

  get hasMoreRulesInBatch() {
    const pastRulesCount = this.chosenRules.length + this.declinedRules.length;
    let pastBatchesSum = 0;
    Game.RULE_BATCHES.find((batch) => {
      pastBatchesSum += batch;
      return pastBatchesSum >= pastRulesCount;
    });
    return pastBatchesSum > pastRulesCount;
  }

  resetNextRule() {
    this.lastRuleTime = Date.now();
    this.nextRule = undefined;
  }

  setNextRule() {
    this.nextRule = this.pendingRules[0];
  }

  get pendingRules() {
    return this._getRulesOfStatus(Game.RULE_STATUS.PENDING);
  }

  get chosenRules() {
    return this._getRulesOfStatus(Game.RULE_STATUS.CHOSEN);
  }

  get declinedRules() {
    return this._getRulesOfStatus(Game.RULE_STATUS.DECLINED);
  }

  get charactersByType() {
    return Object.fromEntries(
      this.characterTypes.map((characterType) => [
        characterType.name,
        this._getCharactersOfType(characterType),
      ])
    );
  }

  get charactersByGenderlessType() {
    const genderlessCharacterTypeNames = this.characterTypes
      .map((type) => type.genderlessName)
      .filter((type, index, arr) => arr.indexOf(type) === index); // unique

    return Object.fromEntries(
      genderlessCharacterTypeNames.map((genderlessCharacterTypeName) => {
        const men = this._getCharactersOfType(
          `${genderlessCharacterTypeName}-man`
        );
        const women = this._getCharactersOfType(
          `${genderlessCharacterTypeName}-woman`
        );
        return [genderlessCharacterTypeName, men.concat(women)];
      })
    );
  }

  charactersDone() {
    return this.characters.filter(
      (charcter) => charcter.location >= Game.TRACK_END
    );
  }

  diversityTypes() {
    let diversityMap = Object.fromEntries(
      this.characterTypes.map((characterType) => [characterType.name, 0])
    );
    this.charactersDone().forEach((character) => {
      diversityMap[character.type.name]++;
    });
    return diversityMap;
  }

  chooseRule(rule) {
    this._setRuleStatus(rule, Game.RULE_STATUS.CHOSEN);
    this.characters = rule.apply(this.characters, this.characterTypes);
  }

  declineRule(rule) {
    this._setRuleStatus(rule, Game.RULE_STATUS.DECLINED);
    this.resetNextRule();
  }

  _setRuleStatus(rule, status) {
    this.rules.find((gameRule) => gameRule.rule === rule).status = status;
  }

  _getRulesOfStatus(ruleStatus) {
    return this.rules
      .filter(({ status }) => status === ruleStatus)
      .map(({ rule }) => rule);
  }

  _getCharactersOfType(characterType) {
    if (characterType.constructor === String) {
      characterType = this.characterTypes.find(
        (type) => type.name === characterType
      );
    }
    return this.characters.filter(
      (character) => character.type === characterType
    );
  }

  static generateRules() {
    return Rule.RULES.map((rule) => ({
      rule,
      status: Game.RULE_STATUS.PENDING,
    })).sort(() => Math.random() - 0.5);
  }

  finish() {
    this.status = Game.STATUS.OVER;
  }

  calculateBonus() {
    let numberOfFinished = this.charactersDone().length;
    let bonusScore = numberOfFinished * CharacterType.characterTypes().length;
    let avg = (
      numberOfFinished / CharacterType.characterTypes().length
    ).toFixed(0);
    for (const key in this.diversityTypes()) {
      bonusScore -= Math.pow(avg - this.diversityTypes()[key], 2);
    }
    Game.compairHighScore(bonusScore + numberOfFinished);
    return Math.max(bonusScore, 0);
  }

  static compairHighScore(newScore) {
    let currentHighest = localStorage.getItem("highest-score");
    if (currentHighest < newScore) {
      localStorage.removeItem("highest-score");
      localStorage.removeItem("highest-score-dateTime");
      localStorage.setItem("highest-score", newScore);
      localStorage.setItem(
        "highest-score-dateTime",
        DateTime.now().toFormat("dd.MM.yyyy")
      );
    }
  }

  getSummeryText() {
    let rulesPass = this.chosenRules.length;
    if (rulesPass < 3) return Game.SUMMERY_TEXTS[0];
    const currentScore = this.score;
    const currentBonus = this.bonusScore;
    let returnText = "";
    for (
      let pointsIndex = 0;
      Game.SUMMERY_TEXTS_POINTS_LIMIT.length;
      pointsIndex++
    ) {
      if (currentScore < Game.SUMMERY_TEXTS_POINTS_LIMIT[pointsIndex]) {
        for (
          let bonusIndex = 0;
          Game.SUMMERY_TEXTS_BONUS_LIMIT.length;
          bonusIndex++
        ) {
          if (currentBonus < Game.SUMMERY_TEXTS_BONUS_LIMIT[bonusIndex]) {
            returnText =
              Game.SUMMERY_TEXTS[
                pointsIndex * (Game.SUMMERY_TEXTS_BONUS_LIMIT.length + 1) +
                  bonusIndex +
                  1
              ];
          }
        }
        returnText = Game.SUMMERY_TEXTS[pointsIndex + 3];
      }
    }
    for (
      let bonusIndex = 0;
      Game.SUMMERY_TEXTS_BONUS_LIMIT.length;
      bonusIndex++
    ) {
      if (currentBonus < Game.SUMMERY_TEXTS_BONUS_LIMIT[bonusIndex]) {
        returnText =
          Game.SUMMERY_TEXTS[
            (Game.SUMMERY_TEXTS_POINTS_LIMIT.length + 1) *
              (Game.SUMMERY_TEXTS_BONUS_LIMIT.length + 1) +
              bonusIndex +
              1
          ];
      }
    }
    if (returnText) return returnText;
    else return Game.SUMMERY_TEXTS[Game.SUMMERY_TEXTS.length - 1];
  }
  static STATUS = {
    PENDING: "pending",
    RUNNING: "running",
    OVER: "over",
  };
  static RULE_STATUS = {
    PENDING: "pending",
    CHOSEN: "chosen",
    DECLINED: "declined",
  };
  static STEP = 0.1;
  static DURATION = 2.5 * 60;

  static CHARACTER_ADDITION_CHANCE = 0.05;
  static RULES_DELAY = 5;
  static TRACK_END = 100;
  static RULE_BATCHES = [3, 4, 3, 3, 5];
  static SUMMERY_TEXTS_POINTS_LIMIT = [30, 55, 80];
  static SUMMERY_TEXTS_BONUS_LIMIT = [100, 200];

  static SUMMERY_TEXTS = [
    {
      firstLine: "בתור שליט מדינת החתולים הצלחת לא משהו",
      secondLine: "כדי לקדם את חתוליך אתה צריך לאשר חוקים שעוזרים לאזרחים",
    },
    {
      firstLine: "בתור שליט מדינת החתולים הצלחת לא משהו",
      secondLine:
        "נראה לי שאפשר יותר טוב. כדאי גם לדאוג לכל המגזרים. רוצה לשחק שוב?",
    },
    {
      firstLine: "בתור שליט מדינת החתולים הצלחת לא משהו, אבל המגוון לא רע.",
      secondLine: "כדאי לנסות שוב. בטוח יהיה טוב יותר",
    },
    {
      firstLine: "בתור שליט מדינת החתולים הצלחת לא משהו",
      secondLine: "אבל אתה פלורליסט אמיתי!",
    },
    {
      firstLine: "בתור שליט מדינת החתולים הצלחת בסדר, אבל המגוון לא משהו. ",
      secondLine: "בטוח שאפשר לשפר",
    },
    {
      firstLine: "בתור שליט מדינת החתולים הצלחת בסדר, והמגוון לא רע. ",
      secondLine: "אבל בטוח שאפשר לשפר.",
    },
    {
      firstLine: "בתור שליט מדינת החתולים הצלחת בסדר, אבל המגוון מדהים.",
      secondLine: "אתה פלורליסט אמיתי!",
    },
    {
      firstLine:
        "וואוו ! הצלחת ממש יפה בתור שליט מדינת החתולים, אבל המגוון לא משהו.",
      secondLine: "כדאי לדאוג לכל המגזרים.",
    },
    {
      firstLine:
        "וואוו ! הצלחת ממש יפה בתור שליט מדינת החתולים, וגם המגוון לא רע.",
      secondLine: "שווה לשתף את התוצאה",
    },
    {
      firstLine: "וואוו ! הצלחת ממש יפה בתור שליט מדינת החתולים.",
      secondLine: "אתה פלורליסט אמיתי! שיתפת?",
    },
    {
      firstLine:
        "וואוו ! כל הכבוד!!! אין שליט מדינת החתולים טוב כמוך בעולם כולו! אבל המגוון לא מספיק טוב.",
      secondLine: "כדאי לדאוג לכל המגזרים.",
    },
    {
      firstLine:
        "וואוו ! כל הכבוד!!! אין שליט מדינת החתולים טוב כמוך בעולם כולו! וגם המגוון לא רע.",
      secondLine: "שווה לשתף את התוצאה",
    },
    {
      firstLine:
        "וואוו ! כל הכבוד!!! אין שליט מדינת החתולים טוב כמוך בעולם כולו! וגם המגוון מעולה!.",
      secondLine: "אתה פלורליסט אמיתי! שיתפת?",
    },
  ];
}
