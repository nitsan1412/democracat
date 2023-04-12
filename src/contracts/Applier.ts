import Character from "../logic/Character";
import CharacterType from "../logic/CharacterType";

export type Applier = (
  characters: Character[],
  characterTypes: CharacterType[]
) => Character[];
