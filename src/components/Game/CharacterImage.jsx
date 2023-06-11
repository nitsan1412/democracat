import Stack from "@mui/material/Stack";
import ArabMan from "../../images/cats/arab-man.png";
import OrthodoxMan from "../../images/cats/orthodox-man.png";
import ReligiousMan from "../../images/cats/religious-man.png";
import SecularMan from "../../images/cats/secular-man.png";
import ArabWoman from "../../images/cats/arab-woman.png";
import OrthodoxWoman from "../../images/cats/orthodox-woman.png";
import ReligiousWoman from "../../images/cats/religious-woman.png";
import SecularWoman from "../../images/cats/secular-woman.png";
import ArabLGBT from "../../images/cats/arab-lgbt.png";
import OrthodoxLGBT from "../../images/cats/orthodox-lgbt.png";
import ReligiousLGBT from "../../images/cats/religious-lgbt.png";
import SecularLGBT from "../../images/cats/secular-lgbt.png";
import ArabManMuted from "../../images/cats/arab-man-muted.png";
import OrthodoxManMuted from "../../images/cats/orthodox-man-muted.png";
import ReligiousManMuted from "../../images/cats/religious-man-muted.png";
import SecularManMuted from "../../images/cats/secular-man-muted.png";
import ArabWomanMuted from "../../images/cats/arab-woman-muted.png";
import OrthodoxWomanMuted from "../../images/cats/orthodox-woman-muted.png";
import ReligiousWomanMuted from "../../images/cats/religious-woman-muted.png";
import SecularWomanMuted from "../../images/cats/secular-woman-muted.png";
import ArabLGBTMuted from "../../images/cats/arab-lgbt-muted.png";
import OrthodoxLGBTMuted from "../../images/cats/orthodox-lgbt-muted.png";
import ReligiousLGBTMuted from "../../images/cats/religious-lgbt-muted.png";
import SecularLGBTMuted from "../../images/cats/secular-lgbt-muted.png";
import ArabWomanTransparent from "../../images/cats/arab-woman-transparent.png";
import OrthodoxWomanTransparent from "../../images/cats/orthodox-woman-transparent.png";
import ReligiousWomanTransparent from "../../images/cats/religious-woman-transparent.png";
import SecularWomanTransparent from "../../images/cats/secular-woman-transparent.png";
import ArabManNotInfluenced from "../../images/cats/arab-man-not-influenced.png";
import OrthodoxManNotInfluenced from "../../images/cats/orthodox-man-not-influenced.png";
import ReligiousManNotInfluenced from "../../images/cats/religious-man-not-influenced.png";
import SecularManNotInfluenced from "../../images/cats/secular-man-not-influenced.png";
import ArabWomanNotInfluenced from "../../images/cats/arab-woman-not-influenced.png";
import OrthodoxWomanNotInfluenced from "../../images/cats/orthodox-woman-not-influenced.png";
import ReligiousWomanNotInfluenced from "../../images/cats/religious-woman-not-influenced.png";
import SecularWomanNotInfluenced from "../../images/cats/secular-woman-not-influenced.png";
import ArabLGBTNotInfluenced from "../../images/cats/arab-lgbt-not-influenced.png";
import OrthodoxLGBTNotInfluenced from "../../images/cats/orthodox-lgbt-not-influenced.png";
import ReligiousLGBTNotInfluenced from "../../images/cats/religious-lgbt-not-influenced.png";
import SecularLGBTNotInfluenced from "../../images/cats/secular-lgbt-not-influenced.png";
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
  "arab-lgbt-muted": ArabLGBTMuted,
  "orthodox-lgbt-muted": OrthodoxLGBTMuted,
  "religious-lgbt-muted": ReligiousLGBTMuted,
  "secular-lgbt-muted": SecularLGBTMuted,
  "arab-woman-transparent": ArabWomanTransparent,
  "orthodox-woman-transparent": OrthodoxWomanTransparent,
  "religious-woman-transparent": ReligiousWomanTransparent,
  "secular-woman-transparent": SecularWomanTransparent,
  "arab-man-not-influenced": ArabManNotInfluenced,
  "orthodox-man-not-influenced": OrthodoxManNotInfluenced,
  "religious-man-not-influenced": ReligiousManNotInfluenced,
  "secular-man-not-influenced": SecularManNotInfluenced,
  "arab-woman-not-influenced": ArabWomanNotInfluenced,
  "orthodox-woman-not-influenced": OrthodoxWomanNotInfluenced,
  "religious-woman-not-influenced": ReligiousWomanNotInfluenced,
  "secular-woman-not-influenced": SecularWomanNotInfluenced,
  "arab-lgbt-not-influenced": ArabLGBTNotInfluenced,
  "orthodox-lgbt-not-influenced": OrthodoxLGBTNotInfluenced,
  "religious-lgbt-not-influenced": ReligiousLGBTNotInfluenced,
  "secular-lgbt-not-influenced": SecularLGBTNotInfluenced,
};
