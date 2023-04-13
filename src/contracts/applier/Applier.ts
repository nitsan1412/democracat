import { ICharacter } from "../Character";
import { ICharacterType } from "../CharacterType";

export interface Applier {
  apply(characters: ICharacter[], characterTypes: ICharacterType[]): ICharacter[];
}
