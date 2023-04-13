import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useGame } from "../../helpers/GameContext";
import ShareButton from "./Share";
import SummaryHeader from "./SummaryHeader";
import EndScore from "./EndScore";
import SummaryReview from "./SummaryReview";
import SummaryRulesReview from "./SummaryRulesReview";
import restartGameArrow from "../../images/icons/restartGameArrow.svg";
import homeBackground from "../../images/homeBackground.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GameSummary() {
  const { game, start } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    if (game.status === "pending") navigate("/");
  }, [game.status, navigate]);
  if (game.status === "pending") return <></>;
  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        direction="column"
        gap={1}
        sx={{
          padding: "1rem",
          ".slick-slide": { padding: "0.5rem 1rem" },
          ".slick-arrow": { zIndex: 72, "&::before": { color: "#000000" } },
          ".slick-prev": { left: "-45px" },
          ".slick-next": { right: "-55px" },
        }}
      >
        <SummaryHeader />

        <Stack
          alignItems="center"
          justifyContent="center"
          direction="column"
          gap={1}
          sx={{
            backgroundImage: `url(${homeBackground})`,
            backgroundPositionY: "-3.4rem",
            padding: "1rem",
            ".slick-slide": { padding: "0.5rem 1rem" },
            ".slick-arrow": { zIndex: 72, "&::before": { color: "#000000" } },
            ".slick-prev": { left: "-45px" },
            ".slick-next": { right: "-55px" },
          }}
        >
          <Stack sx={boxStyle}>
            <EndScore />
          </Stack>
          <Stack sx={boxStyle}>
            <SummaryReview />
          </Stack>
          <Stack sx={boxStyle}>
            <SummaryRulesReview />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        gap={2}
        sx={{
          flexDirection: "row",
          position: "sticky",
          bottom: "0",
          height: "6rem",
          width: "100%",
          zIndex: 150,
          justifyContent: "center",
          paddingBottom: "2rem",
          paddingTop: "2rem",
          alignItems: "center",
          backgroundColor: "white",
          borderTop: "1px solid #F4F4F4",
        }}
      >
        <ShareButton
          sx={{
            fontSize: "0.9rem",
            fontWeight: "500",
            height: "2.7rem",
            padding: "0.5rem 1rem",
          }}
        />
        <Stack
          gap={1}
          sx={{
            border: "1px #646464 solid ",
            padding: "0.5rem 1rem",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            borderRadius: "12px",
            cursor: "pointer",
          }}
          onClick={() => {
            start();
            navigate("/regame");
          }}
        >
          <img src={restartGameArrow} alt="" width="15px" height="15px" />
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            שחק שוב
          </Typography>
        </Stack>
      </Stack>
    </>
  );
}

const boxStyle = {
  border: "2px #ECECEC solid ",
  padding: "0.5rem",
  width: "315px",
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "center",
  borderRadius: "25px",
  backgroundColor: "#FFFFFF",
};
