import { Rule } from "./Rule";
import { ScoreManager } from "./ScoreManager";
import { GameStatus, GameSummary } from "../contracts";
import RuleManager from "./RuleManager";
import CharacterManager from "./CharacterManager";

export default class Game {
  status: GameStatus;
  gameSummary: GameSummary;
  ruleManager: RuleManager;

  private scoreManager: ScoreManager;
  private startTime: number;
  private pauseTime: number;
  private paused: boolean;
  private characterManager: CharacterManager;

  constructor(
    private speed = Game.INITIAL_SPEED,
    private duration = Game.DURATION,
    private charachterAdditionChance = CharacterManager.CHARACTER_ADDITION_CHANCE
  ) {
    this.status = Game.STATUS.PENDING;
  }

  start() {
    this.characterManager = new CharacterManager(this.speed);
    this.scoreManager = new ScoreManager();
    this.status = Game.STATUS.RUNNING;
    this.startTime = Date.now();
    this.paused = false;
    this.ruleManager = new RuleManager();
  }

  step() {
    if (this.paused) return;
    this.characterManager.move();
    this.characterManager.createCharacterWithProbability(
      this.charachterAdditionChance
    );
    this.ruleManager.setNextRuleIfShould();
    if (this.time <= 0) {
      this.finish();
    }
  }

  chooseRule(rule: Rule) {
    this.ruleManager.setRuleStatus(rule, RuleManager.RULE_STATUS.CHOSEN);
    this.characterManager.characters = rule.apply(
      this.characterManager.characters,
      this.characterManager.characterTypes
    );
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
    return this.scoreManager.calculateScore(
      this.characterManager.charactersDone()
    );
  }

  finish() {
    this.status = Game.STATUS.OVER;
    const score = this.scoreManager.calculateScore(
      this.characterManager.charactersDone()
    );
    const bonusScore = this.scoreManager.calculateBonusScore(
      this.characterManager.charactersDone(),
      this.characterManager.characterTypes,
      this.characterManager.diversityTypes()
    );
    this.gameSummary = {
      score,
      bonusScore,
      endGameText: this.scoreManager.getSummaryText(
        this.ruleManager.chosenRules.length,
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

  static STEP = 0.1;
  static DURATION = 2.5 * 60;
  static TRACK_END = 100;
  static INITIAL_SPEED = 120;
}