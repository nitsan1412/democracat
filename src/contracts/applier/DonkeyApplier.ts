import { ICharacter } from "../Character";
import { ICharacterType } from "../CharacterType";
import { Applier } from "./Applier";

export class DonkeyApplier implements Applier {
  apply(characters: ICharacter[], characterTypes: ICharacterType[]) {
    characterTypes.forEach((characterType) =>
      characterType.changeImage("donkey")
    );
    return characters;
  }
}
