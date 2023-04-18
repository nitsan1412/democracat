import Stack from "@mui/material/Stack";
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
import ArabManMuted from "../../images/cats/arab-man-muted.svg";
import OrthodoxManMuted from "../../images/cats/orthodox-man-muted.svg";
import ReligiousManMuted from "../../images/cats/religious-man-muted.svg";
import SecularManMuted from "../../images/cats/secular-man-muted.svg";
import ArabWomanMuted from "../../images/cats/arab-woman-muted.svg";
import OrthodoxWomanMuted from "../../images/cats/orthodox-woman-muted.svg";
import ReligiousWomanMuted from "../../images/cats/religious-woman-muted.svg";
import SecularWomanMuted from "../../images/cats/secular-woman-muted.svg";
// import ArabLGBTMuted from "../../images/cats/arab-lgbt-muted.svg";
// import OrthodoxLGBTMuted from "../../images/cats/orthodox-lgbt-muted.svg";
// import ReligiousLGBTMuted from "../../images/cats/religious-lgbt-muted.svg";
// import SecularLGBTMuted from "../../images/cats/secular-lgbt-muted.svg";
import ArabWomanTransparent from "../../images/cats/arab-woman-transparent.svg";
import OrthodoxWomanTransparent from "../../images/cats/orthodox-woman-transparent.svg";
import ReligiousWomanTransparent from "../../images/cats/religious-woman-transparent.svg";
import SecularWomanTransparent from "../../images/cats/secular-woman-transparent.svg";

export default function CharacterImage({ characterType, sx, ...props }) {
  return (
    <Stack
      sx={{
        ...sx,
        backgroundImage: `url(${IMAGES[characterType]})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      {...props}
    ></Stack>
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
  "arab-man-muted": ArabManMuted,
  "orthodox-man-muted": OrthodoxManMuted,
  "religious-man-muted": ReligiousManMuted,
  "secular-man-muted": SecularManMuted,
  "arab-woman-muted": ArabWomanMuted,
  "orthodox-woman-muted": OrthodoxWomanMuted,
  "religious-woman-muted": ReligiousWomanMuted,
  "secular-woman-muted": SecularWomanMuted,
  "arab-lgbt-muted": ArabLGBT,
  "orthodox-lgbt-muted": OrthodoxLGBT,
  "religious-lgbt-muted": ReligiousLGBT,
  "secular-lgbt-muted": SecularLGBT,
  "arab-woman-transparent": ArabWomanTransparent,
  "orthodox-woman-transparent": OrthodoxWomanTransparent,
  "religious-woman-transparent": ReligiousWomanTransparent,
  "secular-woman-transparent": SecularWomanTransparent,
};
