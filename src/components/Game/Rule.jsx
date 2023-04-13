import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import downArrow from "../../images/icons/downArrow.svg";
import upArrow from "../../images/icons/upArrow.svg";
import RuleImpact from "./RuleImpact";

export default function Rule({ rule, inSummary }) {
  const [showRuleInfo, setShowRuleInfo] = useState(false);
  return (
    <Stack
      sx={{
        border: "none",
        padding: inSummary ? "0.5rem" : "1rem",
        zIndex: inSummary ? 4560 : 99,
        width: !inSummary ? "315px" : "100%",
        height: 1,
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: "25px",
        background: "white",
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.4)"
      }}
    >
      <Stack
        gap={1}
        height={1}
        flexDirection="column"
        alignItems="center"
        alignSelf="center"
        justifyContent="center"
      >
        <Typography variant="h4">הצעת חוק</Typography>
        <Stack
          flexDirection="row"
          onClick={() => setShowRuleInfo(!showRuleInfo)}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              flex: 5,
              fontSize: "1.1rem",
              textDecoration: "underline",
              fontWeight: 600,
            }}
          >
            {rule.name}
          </Typography>
          <img src={showRuleInfo ? upArrow : downArrow} alt="" />
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
        {inSummary ? <RuleImpact rule={rule} inSummary /> : <></>}
      </Stack>
    </Stack>
  );
}
