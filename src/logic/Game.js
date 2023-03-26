import Rule from "./Rule";
import CharacterType from "./CharacterType";
import Character from "./Character";

export default class Game {
  constructor() {
    this.characterTypes = CharacterType.characterTypes();
    this.status = Game.STATUS.PENDING;
    this.characters = [];
    this.rules = [];
  }

  start() {
    this.status = Game.STATUS.RUNNING;
    this.rules = this.generateRules();
    this.startTime = Date.now();
    this.paused = false;
    this.setNextRule();
  }

  step() {
    if (this.paused) return;
    this.characters.forEach((charcter) => {
      if (charcter.location < Game.TRACK_END) charcter.move(Game.STEP);
    });
    if (Math.random() <= Game.CHARACTER_ADDITION_CHANCE) {
      this.characters.push(Character.createCharacter(this.characterTypes));
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
  }

  get time() {
    if (this.paused) {
      return Game.DURATION - (this.puaseTime - this.startTime) / 1000;
    }
    return Game.DURATION - (Date.now() - this.startTime) / 1000;
  }

  get score() {
    let charctersDone = this.characters.filter(
      (charcter) => charcter.location >= Game.TRACK_END
    );
    return charctersDone.length;
  }

  get bonusScore() {
    let diversityMap = Object.fromEntries(
      this.characterTypes.map((characterType) => [characterType.name, 0])
    );
    let charctersDone = this.characters.filter(
      (charcter) => charcter.location >= Game.TRACK_END
    );
    charctersDone.forEach((character) => {
      diversityMap[character.type.name]++;
    });
    console.log("charctersDone", charctersDone);
    console.log("diversityMap", diversityMap);
    if (charctersDone.length > 0)
      return this.calculateBonus(diversityMap, charctersDone);
    return 0;
  }

  get shouldSetNextRule() {
    return (
      !this.nextRule &&
      (Date.now() - this.lastRuleTime) / 1000 > Game.RULES_DELAY
    );
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

  chooseRule(rule) {
    this._setRuleStatus(rule, Game.RULE_STATUS.CHOSEN);
    this.characters = rule.apply(this.characters, this.characterTypes);
  }

  declineRule(rule) {
    // this.resetNextRule()
    this._setRuleStatus(rule, Game.RULE_STATUS.DECLINED);
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

  generateRules() {
    return Rule.RULES.map((rule) => ({
      rule,
      status: Game.RULE_STATUS.PENDING,
    })).sort(() => Math.random() - 0.5);
  }

  finish() {
    this.status = Game.STATUS.OVER;
  }

  calculateBonus(diversityMap, charctersDoneArray) {
    let bonusScore = charctersDoneArray.length
      ? charctersDoneArray.length * CharacterType.characterTypes().length
      : 0; //starter score
    let avg = (
      charctersDoneArray.length / CharacterType.characterTypes().length
    ).toFixed(0);
    console.log("diversityMap", diversityMap);
    Object.keys(diversityMap).forEach((type) => {
      const deviation = avg - type;
      if (deviation > 0) {
        bonusScore = bonusScore - Math.sqrt(deviation);
      }
    });
    return bonusScore;
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
  // static STEP = 1;
  static DURATION = 2.5 * 60;
  // static DURATION = 1 * 30;

  static CHARACTER_ADDITION_CHANCE = 0.05;
  static RULES_DELAY = 5;
  static TRACK_END = 100;
}
