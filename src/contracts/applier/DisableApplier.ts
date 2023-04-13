import { ICharacter } from "../Character";
import { ICharacterType } from "../CharacterType";
import { Applier } from "./Applier";

export class DisableApplier implements Applier {
  constructor(private types: string[]) {}
  apply(characters: ICharacter[], characterTypes: ICharacterType[]) {
    characterTypes
      .filter((characterType) =>
        this.types.some((t) => characterType.name.startsWith(t))
      )
      .forEach((characterType) => {
        characterType.disabled = true;
      });
    return characters.filter((character) =>
      this.types.every((t) => !character.type.name.startsWith(t))
    );
  }
}
