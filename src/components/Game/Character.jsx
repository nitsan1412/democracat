import Donkey from "../../images/cats/donkey2.png";

import { playSound } from "../../helpers/Sounds";
import { IMAGES } from "./CharacterImage";

export default function Character({ character }) {
  return (
    <div
      onClick={() => playSound("meow")}
      style={{
        position: "absolute",
        left: `${80 * character.xPosition}%`,
        top: `${character.location}%`,
        width: character.type.donkey ? "15%" : "21%",
        aspectRatio: character.type.donkey ? "0.7" : "1",
        backgroundImage: `url(${
          character.type.donkey ? Donkey : IMAGES[character.type.name]
        })`,
        backgroundSize: "contain",
      }}
    />
  );
}
