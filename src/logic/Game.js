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
      charcter.move(0.1);
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
    let diversityMap = Object.fromEntries(
      this.characterTypes.map((characterType) => [characterType, 0])
    );
    let charctersDone = this.characters.filter(
      (charcter) => charcter.location >= Game.TRACK_END
    );
    charctersDone.forEach((character) => {
      diversityMap[character.type]++;
    });
    return charctersDone.length + this.calculateBonus(diversityMap);
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

  calculateBonus(diversityMap) {
    return 0;
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
}
