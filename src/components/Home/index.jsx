import { useState } from "react";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";

import InstructionsButton from "./Instructions";
import StartGameButton from "../StartGameButton";
import HightScoreBox from "./HighestScoreBox";
import TermsOfUse from "./TermsOfUse";

export default function StartGameMenu() {
  const highestScoreToShow = {
    highestScore: localStorage.getItem("highest-score"),
    date: localStorage.getItem("highest-score-dateTime"),
  };
  const [showUseInfo, setShowUseInfo] = useState(false);

  return (
    <Stack alignItems="center" sx={{ padding: "3rem", height: 1 }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "700", marginBottom: "-0.5rem" }}
      >
        מיציטופיה
      </Typography>
      <Typography variant="h5">למען פלורליזם חברתי</Typography>
      {!highestScoreToShow.highestScore ? (
        ""
      ) : (
        <Stack sx={{ flexGrow: 1, width: 0.6 }} gap={1} justifyContent="center">
          <HightScoreBox highestScoreToShow={highestScoreToShow} />
        </Stack>
      )}
      <Stack sx={{ flexGrow: 1, width: 0.6 }} gap={1} justifyContent="center">
        <StartGameButton />
        <InstructionsButton
          fullWidth
          disableElevation
          variant="outlined"
          color="secondary"
          sx={{ borderWidth: 2, fontSize: "1.3rem !important", height: "3rem" }}
        />
      </Stack>
      <Stack flexDirection="row" onClick={() => setShowUseInfo(!showUseInfo)}>
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
          תנאי שימוש באתר
        </Typography>
        {/* <img src={showRuleInfo ? upArrow : downArrow} alt="" /> */}
      </Stack>
      <Dialog
        open={showUseInfo}
        onClose={() => {
          setShowUseInfo(false);
        }}
        sx={{ borderRadius: 15, padding: "1rem" }}
      >
        <TermsOfUse />
      </Dialog>
    </Stack>
  );
}
StartGameMenu.characterStyles = {
  width: 150,
  height: 150,
};
