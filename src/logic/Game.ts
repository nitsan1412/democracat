import { Rule } from "./Rule";
import { ScoreManager } from "./ScoreManager";
import { GameStatus, GameSummary } from "../contracts";
import RuleManager from "./RuleManager";
import CharacterManager from "./CharacterManager";

export default class Game {
  status: GameStatus;
  gameSummary: GameSummary;
  ruleManager: RuleManager;
  characterManager: CharacterManager;
  isGameMuted : boolean;

  private scoreManager: ScoreManager;
  private startTime: number;
  private pauseTime: number;
  private paused: boolean;

  constructor(
    private speed = Game.INITIAL_SPEED,
    private duration = Game.DURATION,
    private charachterAdditionChance = CharacterManager.CHARACTER_ADDITION_CHANCE,
  ) {
    Object.assign(this, {
      speed,
      duration,
      charachterAdditionChance,
      status: Game.STATUS.PENDING,
      isGameMuted: localStorage.getItem("isGameMuted")==="true" ? true : false,
    });
  }

  start() {
    this.ruleManager = new RuleManager();
    this.characterManager = new CharacterManager(this.speed);
    this.scoreManager = new ScoreManager();
    this.paused = false;
    this.status = Game.STATUS.RUNNING;
    this.startTime = Date.now();
    this.isGameMuted =  localStorage.getItem("isGameMuted")==="true" ? true : false

  }

  step() {
    if (this.paused) return;
    this.characterManager.move();
    this.characterManager.createCharacterWithProbability(
      this.charachterAdditionChance
    );
    if (this.characterManager.characters.length>1){
      this.ruleManager.setNextRuleIfShould();
    }    
    if (this.time < 0.1) {
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
    const bonusScore = this.scoreManager.calculateBonusScore(this.characterManager.charactersDone());
    this.gameSummary = {
      score,
      bonusScore,
      isHighScore:(score + bonusScore===0) ? false: ScoreManager.compairHighScore(score + bonusScore),
      endGameText: this.scoreManager.getSummaryText(
        this.ruleManager.chosenRules.length,
        score,
        bonusScore,
        ),
    };

  }

  static STATUS: { [key: string]: GameStatus } = {
    PENDING: "pending",
    RUNNING: "running",
    OVER: "over",
  };

  static STEP = 0.1;
  static DURATION = 1.5 * 60;
  static TRACK_END = 100;
  static INITIAL_SPEED = 1;
}
