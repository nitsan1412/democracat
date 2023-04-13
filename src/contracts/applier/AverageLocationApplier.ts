import Game from "../../logic/Game";
import { ICharacter } from "../Character";
import { Applier } from "./Applier";

export class AverageLocationApplier implements Applier {
  apply(characters: ICharacter[]) {
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
  }
}
