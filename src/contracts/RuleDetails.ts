import { ApplyDetails } from "./ApplyDetails";
import { Impact } from "./Impact";

export type RuleDetails = {
  id:number;
  name: string;
  initialInfo: string;
  summaryInfo:string;
  impact: Impact;
  isDelayed?: boolean;
  apply?: ApplyDetails;
  icon?:string
};
