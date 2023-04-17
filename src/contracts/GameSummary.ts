import { SummayText } from "../contracts/SummayText";

export interface GameSummary {
  score: number;
  bonusScore: number;
  endGameText: SummayText | SummayText[];
  isHighScore: boolean
}
