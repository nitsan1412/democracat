import { useState } from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useWindowWidth } from "@react-hook/window-size";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import RuleActions from "./RuleActions";
import RuleImpact from "./RuleImpact";

export default function Rule({ rule, noChoice }) {
  const [showRuleInfo, setShowRuleInfo] = useState(noChoice ? true : false);
  const currentWidth = useWindowWidth();
  return (
    <Paper
      elevation={2}
      sx={{
        padding: "0.5rem",
        width: noChoice ? 230 : currentWidth > 450 ? 350 : "100%",
        maxWidth: 450,
        maxHeight: "18rem",
        position: !noChoice ? "absolute" : "unset",
        top: noChoice ? 0 : 48,
        zIndex: noChoice ? 4560 : 99,
      }}
    >
      <Stack gap={1} height={1}>
        <Stack flexDirection="row">
          <InfoTwoToneIcon
            sx={{ color: "purple", flex: 1 }}
            onClick={() => setShowRuleInfo(!showRuleInfo)}
          />
          <Typography
            variant="body1"
            sx={{ textAlign: "center", flex: 5, fontSize: "1.2rem" }}
          >
            {rule.name}
          </Typography>
        </Stack>

        {showRuleInfo ? (
          <Typography
            variant="body2"
            sx={{ textAlign: "center", flex: 1, fontSize: "0.9rem" }}
          >
            {rule.info}
          </Typography>
        ) : (
          <></>
        )}
        {!noChoice ? <RuleActions rule={rule} /> : <RuleImpact rule={rule} />}
      </Stack>
    </Paper>
  );
}
