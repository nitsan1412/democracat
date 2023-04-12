import CharacterType from "./CharacterType";
import Character from "./Character";
import ScoreManager from "./ScoreManager";
import RuleManager from "./RuleManager";

export default class Game {
  constructor(
    speed = 1,
    duration = Game.DURATION,
    charachterAdditionChance = Game.CHARACTER_ADDITION_CHANCE
  ) {
    Object.assign(this, {
      speed,
      status: Game.STATUS.PENDING,
      rules: [],
      duration,
      charachterAdditionChance,
    });
  }

  start() {
    this.characters = [];
    this.characterTypes = CharacterType.characterTypes(this.speed, false);
    this.scoreManager = new ScoreManager();
    this.status = Game.STATUS.RUNNING;
    this.startTime = Date.now();
    this.paused = false;
    this.ruleManager = new RuleManager();
    this.rules = this.ruleManager.generateRules();
    this.ruleManager.resetNextRule();
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
    if (this.ruleManager.shouldSetNextRule) {
      this.ruleManager.setNextRule();
    }
    if (this.time <= 0) {
      this.finish();
    }
  }

  pause() {
    this.pauseTime = Date.now();
    this.paused = true;
  }

  resume() {
    this.startTime += Date.now() - this.pauseTime;
    this.paused = false;
    this.ruleManager.resetNextRule();
  }

  get time() {
    if (this.paused) {
      return this.duration - (this.pauseTime - this.startTime) / 1000;
    }
    return this.duration - (Date.now() - this.startTime) / 1000;
  }

  get baseScore() {
    return this.scoreManager.calculateScore(this.charactersDone());
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
    return this.characters?.filter(
      (charcter) => charcter.location >= Game.TRACK_END
    );
  }

  diversityTypes() {
    const diversityMap =
      this.characterTypes &&
      Object.fromEntries(
        this.characterTypes.map((characterType) => [characterType.name, 0])
      );
    this.charactersDone()?.forEach((character) => {
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
    this.ruleManager.resetNextRule();
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

  finish() {
    this.status = Game.STATUS.OVER;
    const score = this.scoreManager.calculateScore(this.charactersDone());
    const bonusScore = this.scoreManager.calculateBonusScore(
      this.charactersDone(),
      this.characterTypes,
      this.diversityTypes()
    );
    this.gameSummery = {
      score,
      bonusScore,
      endGameText: this.scoreManager.getSummeryText(
        this.chosenRules.length,
        score,
        bonusScore
      ),
    };
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
  static TRACK_END = 120;
  static RULE_BATCHES = [3, 4, 3, 3, 5];
}
