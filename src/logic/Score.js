// import Rule from "./Rule";
import CharacterType from "./CharacterType";
// import Character from "./Character";
import Game from "./Game";

export default class Score {
  //   static score() {
  //     return Game.characters.filter(
  //       (charcter) => charcter.location >= Game.TRACK_END
  //     ).length;
  //   }

  //   static bonusScore() {
  //     if (Game.charactersDone().length > 0) return Score.calculateBonus();
  //     return 0;
  //   }

  static calculateBonus() {
    let numberOfFinished = Game.charactersDone().length;
    let bonusScore = numberOfFinished * CharacterType.characterTypes().length;
    let avg = (
      numberOfFinished / CharacterType.characterTypes().length
    ).toFixed(0);
    for (const key in Game.diversityTypes()) {
      bonusScore -= Math.pow(avg - Game.diversityTypes()[key], 2);
    }
    return Math.max(bonusScore, 0);
  }
}
