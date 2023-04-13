import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import downArrow from "../../images/icons/downArrow.svg";
import upArrow from "../../images/icons/upArrow.svg";
import RuleImpact from "./RuleImpact";

export default function Rule({ rule, showImpact, showTitle, overTitle, sx={} }) {
  const [showRuleInfo, setShowRuleInfo] = useState(false);
  return (
    <Stack
      sx={{
        border: "none",
        padding: "1rem",
        width: "100%",
        height: 1,
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: "25px",
        background: "white",
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.4)",
        ...sx
      }}
    >
      <Stack
        gap={1}
        width={1}
        height={1}
        flexDirection="column"
        alignItems="center"
        alignSelf="center"
        justifyContent="center"
      >
        {!overTitle ? "" :
              <Typography
                color="primary"
                variant="body1"
                sx={{ fontWeight: 600, textAlign: "center" }}
              >
                {overTitle}
              </Typography>}
        {showTitle ? <Typography variant="h4">הצעת חוק</Typography> : <></>}
        <Stack
          flexDirection="row-reverse"
          onClick={() => setShowRuleInfo(!showRuleInfo)}
          sx={{ position: "relative" }}
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
          <img src={showRuleInfo ? upArrow : downArrow} alt="" style={{ position: "absolute", left: "-1.5rem" }} />
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
        {showImpact ? <RuleImpact rule={rule} /> : <></>}
      </Stack>
    </Stack>
  );
}
