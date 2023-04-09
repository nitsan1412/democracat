import Box from "@mui/material/Box";
import ArabMan from "../../images/cats/old-arab-man.png";
import OrthodoxMan from "../../images/cats/old-orthodox-man.png";
import ReligiousMan from "../../images/cats/old-religious-man.png";
import SecularMan from "../../images/cats/secular-man.png";
import ArabWoman from "../../images/cats/old-arab-woman.png";
import OrthodoxWoman from "../../images/cats/orthodox-woman.png";
import ReligiousWoman from "../../images/cats/old-religious-woman.png";
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
