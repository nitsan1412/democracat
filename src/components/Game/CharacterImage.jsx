import Box from "@mui/material/Box";
import ArabMan from "../../images/new-cats/arab-man.svg";
import OrthodoxMan from "../../images/new-cats/orthodox-man.svg";
import ReligiousMan from "../../images/new-cats/religious-man.svg";
import SecularMan from "../../images/new-cats/secular-man.svg";
import ArabWoman from "../../images/new-cats/arab-woman.svg";
import OrthodoxWoman from "../../images/new-cats/orthodox-woman.svg";
import ReligiousWoman from "../../images/new-cats/religious-woman.svg";
import SecularWoman from "../../images/new-cats/secular-woman.svg";

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
