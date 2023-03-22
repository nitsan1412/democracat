import Box from "@mui/material/Box";

import ArabMan from "../../images/cats/arab-man.png";
import OrthodoxMan from "../../images/cats/orthodox-man.png";
import ReligiousMan from "../../images/cats/religious-man.png";
import SecularMan from "../../images/cats/secular-man.png";

import ArabWoman from "../../images/cats/arab-woman.png";
import OrthodoxWoman from "../../images/cats/orthodox-woman.png";
import ReligiousWoman from "../../images/cats/religious-woman.png";
import SecularWoman from "../../images/cats/secular-woman.png";

import Donkey from "../../images/cats/donkey.png";

import { playSound } from "../../helpers/Sounds";

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
          character.donkey ? Donkey : Character.IMAGES[character.type.name]
        })`,
        backgroundSize: "contain",
      }}
    />
  );
}

Character.HORIZONTAL_VARIANCE = 4;
Character.Image = function ({ characterType, sx, ...props }) {
  return (
    <Box
      sx={{
        ...sx,
        backgroundImage: `url(${Character.IMAGES[characterType]})`,
        backgroundSize: "contain",
      }}
      {...props}
    />
  );
};

Character.IMAGES = {
  "arab-man": ArabMan,
  "orthodox-man": OrthodoxMan,
  "religious-man": ReligiousMan,
  "secular-man": SecularMan,

  "arab-woman": ArabWoman,
  "orthodox-woman": OrthodoxWoman,
  "religious-woman": ReligiousWoman,
  "secular-woman": SecularWoman,
};
