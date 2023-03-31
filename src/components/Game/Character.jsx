import Box from "@mui/material/Box";

import Donkey from "../../images/cats/donkey2.png";

import { playSound } from "../../helpers/Sounds";
import { IMAGES } from "./CharacterImage";

export default function Character({ character }) {
  return (
    <Box
      onClick={() => playSound("meow")}
      sx={{
        position: "absolute",
        left: `15%`,
        top: `${character.location}%`,
        width: character.type.donkey ? "50%" : "70%",
        aspectRatio: character.type.donkey ? "0.7" : "1",
        backgroundImage: `url(${
          character.type.donkey ? Donkey : IMAGES[character.type.name]
        })`,
        backgroundSize: "contain",
      }}
    />
  );
}
