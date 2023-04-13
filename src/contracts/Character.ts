import { ICharacterType } from "./CharacterType";

export interface ICharacter {
  type: ICharacterType;
  location: number;
  move(dt: number): void;
}
