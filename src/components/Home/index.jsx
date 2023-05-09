import { useState } from "react";
import { Stack, Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import RateReviewIcon from "@mui/icons-material/RateReview";

import InstructionsButton from "./Instructions";
import StartGameButton from "../StartGameButton";
import HightScoreBox from "./HighestScoreBox";
import TermsOfUse from "./TermsOfUse";
import About from "./About";
import homeBackground from "../../images/homeBackground.png";

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
          <HightScoreBox highestScoreToShow={highestScoreToShow} />
        )}
      </Stack>

      <Stack sx={{ width: 0.6 }} gap={2} justifyContent="center">
        <StartGameButton />
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
        <Button
          // fullWidth
          // disableElevation
          variant="outlined"
          color="black"
          cursor="pointer"
          sx={{
            borderWidth: 2,
            fontSize: "1.3rem",
            height: "3rem",
            backgroundColor: "white",
            position: "inherit",
          }}
          onClick={() => {
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLScMHQ-JwlNL0F9RW7QZEsgzPpPCigf_7y3DQbpceLTDAvcTZg/viewform",
              "_blank"
            );
          }}
        >
          {" "}
          <RateReviewIcon />
          משוב
        </Button>
      </Stack>
      <Stack
        sx={{ width: 0.6, marginTop: "3rem" }}
        gap={1}
        justifyContent="center"
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1.1rem",
            textDecoration: "underline",
            fontWeight: 600,
            cursor: "pointer",
            padding: 1,
          }}
          onClick={() => setShowUseInfo(true)}
        >
          תקנון ותנאי שימוש{" "}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1.1rem",
            textDecoration: "underline",
            fontWeight: 600,
            cursor: "pointer",
            padding: 1,
          }}
          onClick={() => setShowAbout(true)}
        >
          מי אנחנו ומדוע יצרנו את המשחק{" "}
        </Typography>
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
    </Stack>
  );
}
StartGameMenu.characterStyles = {
  width: 150,
  height: 150,
};
