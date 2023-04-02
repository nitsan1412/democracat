import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import downArrow from "../../images/icons/downArrow.svg";
import upArrow from "../../images/icons/upArrow.svg";

export default function Rule({ rule, noChoice }) {
  const [showRuleInfo, setShowRuleInfo] = useState(noChoice ? true : false);
  return (
    <Stack
      sx={{
        border: "2px #ECECEC solid ",
        padding: "0.5rem",
        zIndex: noChoice ? 4560 : 99,
        width: "315px",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: "25px",
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
        <Stack flexDirection="row">
          <Typography variant="h4">הצעת חוק</Typography>
        </Stack>
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
          <img
            src={showRuleInfo ? upArrow : downArrow}
            alt=""
            // onClick={() => setShowRuleInfo(!showRuleInfo)}
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
      </Stack>
    </Stack>
  );
}
