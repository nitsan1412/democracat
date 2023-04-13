import { useState } from "react";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";

import InstructionsButton from "./Instructions";
import StartGameButton from "../StartGameButton";
import HightScoreBox from "./HighestScoreBox";
import TermsOfUse from "./TermsOfUse";
import homeBackground from "../../images/homeBackground.png";

export default function StartGameMenu() {
  const highestScoreToShow = {
    highestScore: localStorage.getItem("highest-score"),
    date: localStorage.getItem("highest-score-dateTime"),
  };
  const [showUseInfo, setShowUseInfo] = useState(false);

  return (
    <Stack
      alignItems="center"
      sx={{
        height: 1,
        padding: "2rem 0 4rem",
        gap: "1rem",
        backgroundImage: `url(${homeBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom"
      }}
    >
      <Stack
        justifyContent="center"
        sx={{
          height: "8rem"
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "700" }}>
          מיציטופיה
        </Typography>
        <Typography variant="h5">למען פלורליזם חברתי</Typography>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="space-between"
        sx={{
          height: "calc(100% - 4rem)",
          width: 1,
          "> :only-child": { margin: "auto" }
        }}
      >
        {!highestScoreToShow.highestScore ? (
          ""
        ) : (
          <HightScoreBox highestScoreToShow={highestScoreToShow} />
        )}
        <Stack sx={{ width: 0.6 }} gap={2} justifyContent="center">
          <StartGameButton />
          <InstructionsButton
            fullWidth
            disableElevation
            variant="outlined"
            color="secondary"
            sx={{
              borderWidth: 2,
              fontSize: "1.3rem !important",
              height: "3rem",
              backgroundColor: "white",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "1.1rem",
              textDecoration: "underline",
              fontWeight: 600,
            }}
          >
            תקנון ותנאי שימוש{" "}
          </Typography>
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
      </Stack>
    </Stack>
  );
}
StartGameMenu.characterStyles = {
  width: 150,
  height: 150,
};
