import CharacterType from "./CharacterType";
import Character from "./Character";
import { Rule } from "./Rule";
import { ScoreManager } from "./ScoreManager";
import { GameRule } from "./GameRule";
import { GameStatus, GameSummary, RuleStatus } from "../contracts";

export default class Game {
  status: GameStatus;
  gameSummery: GameSummary;

  private rules: GameRule[];
  private characters: Character[];
  private characterTypes: CharacterType[];
  private scoreManager: ScoreManager;
  private startTime: number;
  private pauseTime: number;
  private paused: boolean;
  private nextRule: Rule;
  private lastRuleTime: number;

  constructor(
    private speed = 1,
    private duration = Game.DURATION,
    private charachterAdditionChance = Game.CHARACTER_ADDITION_CHANCE
  ) {
    this.status = Game.STATUS.PENDING;
    this.rules = [];
  }

  start() {
    this.characters = [];
    this.characterTypes = CharacterType.characterTypes(this.speed, false);
    this.scoreManager = new ScoreManager();
    this.status = Game.STATUS.RUNNING;
    this.rules = this.generateRules();
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
    this.pauseTime = Date.now();
    this.paused = true;
  }

  resume() {
    this.startTime += Date.now() - this.pauseTime;
    this.paused = false;
    this.resetNextRule();
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

  private get shouldSetNextRule() {
    return (
      !this.nextRule &&
      (this.hasMoreRulesInBatch ||
        (Date.now() - this.lastRuleTime) / 1000 > Game.RULES_DELAY)
    );
  }

  private get hasMoreRulesInBatch() {
    const pastRulesCount = this.chosenRules.length + this.declinedRules.length;
    let pastBatchesSum = 0;
    Game.RULE_BATCHES.find((batch) => {
      pastBatchesSum += batch;
      return pastBatchesSum >= pastRulesCount;
    });
    return pastBatchesSum > pastRulesCount;
  }

  private resetNextRule() {
    this.lastRuleTime = Date.now();
    this.nextRule = undefined;
  }

  private setNextRule() {
    this.nextRule = this.pendingRules[0];
  }

  private get pendingRules() {
    return this._getRulesOfStatus(Game.RULE_STATUS.PENDING);
  }

  get chosenRules() {
    return this._getRulesOfStatus(Game.RULE_STATUS.CHOSEN);
  }

  private get declinedRules() {
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

  private get charactersByGenderlessType() {
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

  private charactersDone(): Character[] {
    return this.characters?.filter(
      (charcter) => charcter.location >= Game.TRACK_END
    );
  }

  diversityTypes() {
    const diversityMap: { [name: string]: number } =
      this.characterTypes &&
      Object.fromEntries(
        this.characterTypes.map((characterType) => [characterType.name, 0])
      );
    this.charactersDone()?.forEach((character) => {
      diversityMap[character.type.name]++;
    });
    return diversityMap;
  }

  chooseRule(rule: Rule) {
    this._setRuleStatus(rule, Game.RULE_STATUS.CHOSEN);
    this.characters = rule.apply(this.characters, this.characterTypes);
  }

  declineRule(rule: Rule) {
    this._setRuleStatus(rule, Game.RULE_STATUS.DECLINED);
    this.resetNextRule();
  }

  private _setRuleStatus(rule: Rule, status: RuleStatus) {
    const gameRule = this.rules.find((gameRule) => gameRule.rule === rule);
    gameRule.status = status;
  }

  private _getRulesOfStatus(ruleStatus: RuleStatus): Rule[] {
    return this.rules
      .filter(({ status }) => status === ruleStatus)
      .map(({ rule }) => rule);
  }

  private _getCharactersOfType(characterType) {
    if (characterType.constructor === String) {
      characterType = this.characterTypes.find(
        (type) => type.name === characterType
      );
    }
    return this.characters.filter(
      (character) => character.type === characterType
    );
  }

  private generateRules(): GameRule[] {
    return Rule.RULES.map(
      (rule) =>
        ({
          rule,
          status: Game.RULE_STATUS.PENDING,
        } as GameRule)
    ).sort(() => Math.random() - 0.5);
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

  static STATUS: { [key: string]: GameStatus } = {
    PENDING: "pending",
    RUNNING: "running",
    OVER: "over",
  };
  static RULE_STATUS: { [key: string]: RuleStatus } = {
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
