import { useState } from "react";
import { Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import InstructionsButton from "../Instructions";
import StartGameButton from "../StartGameButton";
import HightScoreBox from "./HighestScoreBox";
import TermsOfUse from "./TermsOfUse";
import About from "./About";
import homeBackground from "../../images/homeBackground.png";
import FeedbackButton from "../FeedbakButton";

export default function StartGameMenu() {
  const highestScoreToShow = {
    highestScore: localStorage.getItem("highest-score"),
    date: localStorage.getItem("highest-score-dateTime"),
  };
  const [showUseInfo, setShowUseInfo] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <Stack
      alignItems="center"
      sx={{
        height: 1,
        padding: "2rem 0 4rem",
        gap: "1rem",
        backgroundImage: `url(${homeBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <Stack
        justifyContent="center"
        sx={{
          height: "8rem",
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
          height: "8rem",
          width: 1,
          marginBottom: "4rem",
          "> :only-child": { margin: "auto" },
        }}
      >
        {!highestScoreToShow.highestScore ? (
          ""
        ) : (
          <>
            <HightScoreBox highestScoreToShow={highestScoreToShow} />
            <FeedbackButton />
          </>
        )}
      </Stack>

      <Stack sx={{ width: 0.6 }} gap={2} justifyContent="center">
        <InstructionsButton
          fullWidth
          disableElevation
          variant="outlined"
          color="secondary"
          cursor="pointer"
          zIndex={30}
          sx={{
            borderWidth: 2,
            fontSize: "1.3rem !important",
            height: "3rem",
            backgroundColor: "white",
          }}
        />
        <StartGameButton />
      </Stack>
      {!highestScoreToShow.highestScore ? <FeedbackButton /> : ""}

      <Stack
        sx={{ marginTop: "10rem" }}
        flexDirection="row"
        justifyContent="space-between"
        minWidth="95%"
      >
        <Typography
          variant="body1"
          sx={{
            textDecoration: "underline",
            textAlign: "center",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: "pointer",
            padding: 1,
            color: "#7A7A7A",
          }}
          onClick={() => setShowAbout(true)}
        >
          עלינו ועל המשחק{" "}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: "pointer",
            padding: 1,
            color: "#7A7A7A",
          }}
          onClick={() => setShowUseInfo(true)}
        >
          תקנון ותנאי שימוש{" "}
        </Typography>
      </Stack>

      <Dialog
        open={showUseInfo}
        onClose={() => {
          setShowUseInfo(false);
        }}
        sx={{ borderRadius: 15, margin: "0 -1rem" }}
      >
        <Stack
          alignItems="flex-start"
          sx={{
            hight: "2rem",
            position: "sticky",
            top: "0",
            backgroundColor: "#ffffff",
            zIndex: 150,
            cursor: "pointer",
            padding: "1rem",
          }}
          onClick={() => setShowUseInfo(false)}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "1.1rem",
              paddingRight: "0.5rem",
              paddingLeft: "0.5rem",
              fontWeight: 800,
              borderRadius: "50px",
              border: "solid 2px black",
              backgroundColor: "#ffffff",
            }}
            onClick={() => setShowUseInfo(true)}
          >
            X
          </Typography>{" "}
        </Stack>
        <TermsOfUse />
      </Dialog>
      <Dialog
        open={showAbout}
        onClose={() => {
          setShowAbout(false);
        }}
        sx={{ borderRadius: 15, margin: "0 -1rem" }}
      >
        <Stack
          alignItems="flex-start"
          sx={{
            hight: "2rem",
            position: "sticky",
            top: "0",
            backgroundColor: "#ffffff",
            zIndex: 150,
            cursor: "pointer",
            padding: "1rem",
          }}
          onClick={() => setShowAbout(false)}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontSize: "1.1rem",
              paddingRight: "0.5rem",
              paddingLeft: "0.5rem",
              fontWeight: 800,
              borderRadius: "50px",
              border: "solid 2px black",
              backgroundColor: "#ffffff",
            }}
            onClick={() => setShowAbout(true)}
          >
            X
          </Typography>{" "}
        </Stack>
        <About />
      </Dialog>
    </Stack>
  );
}

StartGameMenu.characterStyles = {
  width: 150,
  height: 150,
};
