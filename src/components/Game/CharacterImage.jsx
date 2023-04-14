import Box from "@mui/material/Box";
import ArabMan from "../../images/cats/arab-man.svg";
import OrthodoxMan from "../../images/cats/orthodox-man.svg";
import ReligiousMan from "../../images/cats/religious-man.svg";
import SecularMan from "../../images/cats/secular-man.svg";
import ArabWoman from "../../images/cats/arab-woman.svg";
import OrthodoxWoman from "../../images/cats/orthodox-woman.svg";
import ReligiousWoman from "../../images/cats/religious-woman.svg";
import SecularWoman from "../../images/cats/secular-woman.svg";
import ArabLGBT from "../../images/cats/arab-lgbt.svg";
import OrthodoxLGBT from "../../images/cats/orthodox-lgbt.svg";
import ReligiousLGBT from "../../images/cats/religious-lgbt.svg";
import SecularLGBT from "../../images/cats/secular-lgbt.svg";

export default function CharacterImage({ characterType, sx, ...props }) {
  return (
    <Box
      sx={{
        ...sx,
        backgroundImage: `url(${IMAGES[characterType]})`,
        backgroundRepeat: "no-repeat",
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
  "arab-lgbt": ArabLGBT,
  "orthodox-lgbt": OrthodoxLGBT,
  "religious-lgbt": ReligiousLGBT,
  "secular-lgbt": SecularLGBT,
};
