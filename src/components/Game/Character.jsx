import Box from "@mui/material/Box";

import Donkey from "../../images/cats/donkey1.jpeg";

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
        width: "70%",
        aspectRatio: "1",
        backgroundImage: `url(${
          character.type.donkey ? Donkey : IMAGES[character.type.name]
        })`,
        backgroundSize: "contain",
      }}
    />
  );
}

// Character.HORIZONTAL_VARIANCE = 8;
