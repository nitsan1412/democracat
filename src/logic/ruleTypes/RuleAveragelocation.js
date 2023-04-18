import { Rule } from "@mui/icons-material";
import Game from "./Game";
import { rules } from "./Game-Settings";

export default class RuleAveragelocation extends Rule {
  constructor({ id, name, impact, apply, initialInfo, summaryInfo }) {
    super({ id, name, impact, apply, initialInfo, summaryInfo });
    Object.assign(this, { id, name, impact, initialInfo, summaryInfo });
    if (apply) {
      this.apply = apply;
    }
  }

  apply(characters) {
    const onBoardCharacters = characters.filter(
      (character) =>
        character.location < Game.TRACK_END && character.location > 0
    );
    const averageLocation =
      onBoardCharacters.reduce(
        (accumulator, currentValue) => accumulator + currentValue.location,
        0
      ) / characters.length;
    onBoardCharacters.forEach((character) => {
      character.location = averageLocation;
    });
    return characters;
  }

  static RULES = rules.map((r) => {
    const {
      id,
      name,
      impact,
      initialInfo,
      summaryInfo,
      apply: applyDetails,
    } = r;
    const apply = Rule.initApplier(applyDetails);
    return new Rule({ id, name, impact, initialInfo, summaryInfo, apply });
  });
}
