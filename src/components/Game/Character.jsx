import { useGame } from "../../helpers/GameContext";
import { playSound } from "../../helpers/Sounds";
import { IMAGES } from "./CharacterImage";

const TURNING_POINT = 60;
const CENTER_POINT = 45;

export default function Character({ character, trackSize }) {
  const { game } = useGame();

  const yPosition = (trackSize / 100) * character.location;
  const xPosition = (() => {
    const x = 80 * character.xPosition;
    if (yPosition < TURNING_POINT) return x;
    else {
      const m = (CENTER_POINT - x) / (trackSize - TURNING_POINT);
      return x + m * (yPosition - TURNING_POINT);
    }
  })();

  return (
    <div
      onClick={() =>
        playSound("meow", game.isGameMuted || character.type.muted)
      }
      style={{
        position: "absolute",
        left: `${xPosition}%`,
        top: `${yPosition}%`,
        width: character.type.muted ? "45px" : "45px",
        height: character.type.muted ? "45px" : "48px",
        aspectRatio: character.type.muted ? "0.7" : "1",
        backgroundImage: `url(${
          character.type.muted
            ? IMAGES[`${character.type.name}-muted`]
            : character.type.transparent
            ? IMAGES[`${character.type.name}-transparent`]
            : IMAGES[character.type.name]
        })`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
