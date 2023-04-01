import { useState } from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useWindowWidth } from "@react-hook/window-size";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import RuleActions from "./RuleActions";
import RuleImpact from "./RuleImpact";
import downArrow from "../../images/icons/downArrow.svg";
import upArrow from "../../images/icons/upArrow.svg";

export default function Rule({ rule, noChoice }) {
  const [showRuleInfo, setShowRuleInfo] = useState(noChoice ? true : false);
  return (
    <Paper
      elevation={2}
      sx={{
        padding: "0.5rem",
        zIndex: noChoice ? 4560 : 99,
      }}
    >
      <Stack gap={1} height={1} flexDirection="column">
        <Stack flexDirection="row">
          <Typography variant="h4">הצעת חוק</Typography>
        </Stack>
        <Stack flexDirection="row">
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              flex: 5,
              fontSize: "1rem",
              textDecoration: "underline",
            }}
          >
            {rule.name}
          </Typography>
          <img
            src={showRuleInfo ? upArrow : downArrow}
            alt=""
            onClick={() => setShowRuleInfo(!showRuleInfo)}
          />
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
        {/* {!noChoice ? <RuleActions rule={rule} /> : <RuleImpact rule={rule} />} */}
      </Stack>
    </Paper>
  );
}
