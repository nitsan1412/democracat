import { Impact } from "./Impact";
import { Applier } from "./applier";

export type RuleDetails = {
  name: string;
  info: string;
  impact: Impact;
  isDelayed?: boolean;
  apply?: Applier;
};
