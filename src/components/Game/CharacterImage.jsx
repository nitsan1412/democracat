import Box from "@mui/material/Box";
import ArabMan from "../../images/cats/arab-man.png";
import OrthodoxMan from "../../images/cats/orthodox-man.png";
import ReligiousMan from "../../images/cats/religious-man.png";
import SecularMan from "../../images/cats/secular-man.png";
import ArabWoman from "../../images/cats/arab-woman.png";
import OrthodoxWoman from "../../images/cats/orthodox-woman.png";
import ReligiousWoman from "../../images/cats/religious-woman.png";
import SecularWoman from "../../images/cats/secular-woman.png";

export default function CharacterImage({ characterType, sx, ...props }) {
  return (
    <Box
      sx={{
        ...sx,
        backgroundImage: `url(${IMAGES[characterType]})`,
        backgroundSize: "contain",
      }}
      {...props}
    />
  );
}

export const IMAGES = {
  "arab-man": ArabMan,
  "orthodox-man": OrthodoxMan,
  "religious-man": ReligiousMan,
  "secular-man": SecularMan,
  "arab-woman": ArabWoman,
  "orthodox-woman": OrthodoxWoman,
  "religious-woman": ReligiousWoman,
  "secular-woman": SecularWoman,
};
