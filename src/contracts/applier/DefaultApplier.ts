import { ICharacter } from "../Character";
import { ICharacterType } from "../CharacterType";
import { Impact } from "../Impact";
import { Applier } from "./Applier";

export class DefaultApplier implements Applier {
  constructor(private impact: Impact) {}
  apply(characters: ICharacter[], characterTypes: ICharacterType[]) {
    Object.entries(this.impact).forEach(([filter, speedChange]) => {
      characterTypes
        .filter((characterType) => characterType.name.includes(filter))
        .forEach((characterType) => characterType.changeSpeed(speedChange));
    });

    return characters;
  }
}
