import Donkey from "../../images/cats/donkey2.png";

import { playSound } from "../../helpers/Sounds";
import { IMAGES } from "./CharacterImage";

const TURNING_POINT = 60
const CENTER_POINT = 45

export default function Character({ character, trackSize }) {

  const yPosition = trackSize / 100 * character.location
  const xPosition = (() => {
    const x = 80 * character.xPosition
    if (yPosition < TURNING_POINT)
      return x
    else {
      const m = (CENTER_POINT - x) / (trackSize - TURNING_POINT)
      return x + m * (yPosition - TURNING_POINT)
    }
  }) ()

  return (
    <div
      onClick={() => playSound("meow")}
      style={{
        position: "absolute",
        left: `${xPosition}%`,
        top: `${yPosition}%`,
        width: character.type.donkey ? "45px" : "45px",
        height: character.type.donkey ? "45px" : "48px",
        aspectRatio: character.type.donkey ? "0.7" : "1",
        backgroundImage: `url(${
          character.type.donkey ? Donkey : IMAGES[character.type.name]
        })`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
