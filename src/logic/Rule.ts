import { Applier, ApplyDetails, Impact } from "../contracts";
import Character from "./Character";
import CharacterType from "./CharacterType";
import Game from "./Game";
import { rules } from "./Game-Settings";

export class Rule {
  constructor(
    public id: number,
    public name: string,
    public initialInfo: string,
    public summaryInfo: string,
    private impact: Impact,
    public isDelayed: boolean | undefined,
    apply: Applier
  ) {
    this.apply = apply || this.apply;
  }

  apply(characters: Character[], characterTypes: CharacterType[]) {
    Object.entries(this.impact).forEach(([filter, speedChange]) => {
      let currentCharacterTypes = (filter==="all") ?characterTypes : characterTypes.filter((characterType) => characterType.name.includes(filter))
      currentCharacterTypes.forEach((characterType) => characterType.changeSpeed(speedChange));
    });

    return characters;
  }

  static initApplier(
    apply: ApplyDetails
  ): (characters: Character[], characterTypes: CharacterType[]) => Character[] | null | undefined  {
    if (!apply) {
      return null;
    }
    switch (apply.type) {
      case "Muted":
        return (characters, characterTypes) => {
          characterTypes.forEach((characterType) =>
            characterType.changeImage("muted")
          );
          return characters;
        };
      case "Average-Location":
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
      case "Reset":
        return (characters, characterTypes) => {
          characterTypes.forEach((characterType) => {
            characterType.resetSpeed();
            if (characterType.muted) {
              characterType.changeImage(characterType.name);
            }
          });
          return characters;
        };
      case "Disable":
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
        case "Woman-Transparent": 
        return (characters, characterTypes) => {
          const types = apply.args || [];
          characterTypes
            .filter((characterType) =>
             characterType.name.includes("-woman"))
            .forEach((characterType) => {
              characterType.changeImage("transparent");
            });
            Object.entries(types).forEach(([filter, speedChange]) => {
              characterTypes
                .filter((characterType) => characterType.name.includes(filter))
                .forEach((characterType) => characterType.changeSpeed(speedChange));
            });
            return characters;
        };
      default:
        console.error("Got unsupported apply", apply);
    }
    return null
  }

  static RULES = rules.map((r) => {
    const { id, name, impact, initialInfo, summaryInfo, isDelayed, apply: applyDetails } = r;
    const apply = Rule.initApplier(applyDetails);
    return new Rule(id, name, initialInfo, summaryInfo, impact, isDelayed, apply);
  });
}
