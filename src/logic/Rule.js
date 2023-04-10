import Game from "./Game";
import { rules } from "./Game-Settings";

export default class Rule {
  constructor({ name, impact, apply, info }) {
    Object.assign(this, { name, impact, info });
    if (apply) {
      this.apply = apply;
    }
  }

  apply(characters, characterTypes) {
    Object.entries(this.impact).forEach(([filter, speedChange]) => {
      characterTypes
        .filter((characterType) => characterType.name.includes(filter))
        .forEach((characterType) => characterType.changeSpeed(speedChange));
    });

    return characters;
  }

  static initApplier(apply) {
    if (!apply) {
      return;
    }
    switch (apply.type) {
      case "donkey":
        return (characters, characterTypes) => {
          characterTypes.forEach((characterType) =>
            characterType.changeImage("donkey")
          );
          return characters;
        };
      case "average-loc":
        return (characters) => {
          const onBoardCharacters = characters.filter(
            (character) =>
              character.location < Game.TRACK_END && character.location > 0
          );
          const averageLocation =
            onBoardCharacters.reduce(
              (accumulator, currentValue) =>
                accumulator + currentValue.location,
              0
            ) / characters.length;
          onBoardCharacters.forEach((character) => {
            character.location = averageLocation;
          });
          return characters;
        };
      case "reset":
        return (characters, characterTypes) => {
          characterTypes.forEach((characterType) => {
            characterType.resetSpeed();
            if (characterType.donkey) {
              characterType.changeImage(characterType.name);
            }
          });
          return characters;
        };
      case "disable":
        return (characters, characterTypes) => {
          const types = apply.args || [];
          characterTypes
            .filter((characterType) =>
              types.some((t) => characterType.name.startsWith(t))
            )
            .forEach((characterType) => {
              characterType.disabled = true;
            });
          return characters.filter((character) =>
            types.every((t) => !character.type.name.startsWith(t))
          );
        };
      default:
        console.error("Got unsupported apply", apply);
    }
  }

  static RULES = rules.map((r) => {
    const { name, impact, info, apply: applyDetails } = r;
    const apply = Rule.initApplier(applyDetails);
    return new Rule({ name, impact, info, apply });
  });
}
