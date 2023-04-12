import { Rule } from "@mui/icons-material";
import Game from "./Game";
import { rules } from "./Game-Settings";

export default class RuleAveragelocation extends Rule {
  constructor({ name, impact, apply, info }) {
    super({ name, impact, apply, info });
    Object.assign(this, { name, impact, info });
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
    const { name, impact, info, apply: applyDetails } = r;
    const apply = Rule.initApplier(applyDetails);
    return new Rule({ name, impact, info, apply });
  });
}
