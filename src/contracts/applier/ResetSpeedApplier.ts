import { ICharacter } from "../Character";
import { ICharacterType } from "../CharacterType";
import { Applier } from "./Applier";

export class ResetSpeedApplier implements Applier {
  apply(characters: ICharacter[], characterTypes: ICharacterType[]) {
    characterTypes.forEach((characterType) => {
      characterType.resetSpeed();
      if (characterType.donkey) {
        characterType.changeImage(characterType.name);
      }
    });
    return characters;
  }
}
