import { RuleStatus } from "../contracts";
import { GameRule } from "./GameRule";
import { Rule } from "./Rule";

export default class RuleManager {
  rules: GameRule[];
  lastRuleTime: number;
  nextRule: any;
  
  constructor() {
    this.generateRules();
    this.resetNextRule();
  }

  private generateRules() {
    this.rules = Rule.RULES.map((rule) => ({
      rule,
      status: RuleManager.RULE_STATUS.PENDING,
    })).sort(() => Math.random() - 0.5);
  }

  resetNextRule() {
    this.lastRuleTime = Date.now();
    this.nextRule = undefined;
  }

  setNextRule() {
    if (
      this.chosenRules.length + this.declinedRules.length >
      RuleManager.DELAYED_RULES_PERIOD
    ) {
      this.nextRule = this.pendingRules[0];
    } else {
      this.nextRule = this.pendingRules.filter(
        (pendingRule) => !pendingRule.isDelayed
      )[0];
    }
  }

  setNextRuleIfShould() {
    if (this.shouldSetNextRule) {
      this.setNextRule();
    }
  }

  private get shouldSetNextRule() {
    return (
      !this.nextRule &&
      (this.hasMoreRulesInBatch ||
        (Date.now() - this.lastRuleTime) / 1000 > RuleManager.RULES_DELAY)
    );
  }

  private get hasMoreRulesInBatch() {
    const pastRulesCount = this.chosenRules.length + this.declinedRules.length;
    let pastBatchesSum = 0;
    RuleManager.RULE_BATCHES.find((batch) => {
      pastBatchesSum += batch;
      return pastBatchesSum >= pastRulesCount;
    });
    return pastBatchesSum > pastRulesCount;
  }

  declineRule(rule: Rule) {
    this.setRuleStatus(rule, RuleManager.RULE_STATUS.DECLINED);
    this.resetNextRule();
  }

  setRuleStatus(rule: Rule, status: RuleStatus) {
    this.rules.find((gameRule) => gameRule.rule === rule).status = status;
  }

  private getRulesByStatus(ruleStatus: RuleStatus): Rule[] {
    return this.rules
      .filter(({ status }) => status === ruleStatus)
      .map(({ rule }) => rule);
  }

  get pendingRules() {
    return this.getRulesByStatus(RuleManager.RULE_STATUS.PENDING);
  }

  get chosenRules() {
    return this.getRulesByStatus(RuleManager.RULE_STATUS.CHOSEN);
  }

  get declinedRules() {
    return this.getRulesByStatus(RuleManager.RULE_STATUS.DECLINED);
  }

  static RULE_STATUS: { [key: string]: RuleStatus } = {
    PENDING: "pending",
    CHOSEN: "chosen",
    DECLINED: "declined",
  };
  static RULE_BATCHES = [3, 4, 3, 3, 5];
  static RULES_DELAY = 5;
  static DELAYED_RULES_PERIOD = 7;
}
