import { ApplyDetails } from "./ApplyDetails";
import { Impact } from "./Impact";

export type RuleDetails = {
  name: string;
  info: string;
  impact: Impact;
  isDelayed?: boolean;
  apply?: ApplyDetails;
};
