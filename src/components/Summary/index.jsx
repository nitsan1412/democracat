import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { useGame } from "../../helpers/GameContext";
import { useNavigate } from "../../helpers/SmartNavigate";
import ShareButton from "./Share";
import SummaryHeader from "./SummaryHeader";
import EndScore from "./EndScore";
import SummaryReview from "./SummaryReview";
import SummaryRulesReview from "./SummaryRulesReview";
// import PluralismComic from "./PluralismComic";
import restartGameArrow from "../../images/icons/restartGameArrow.svg";
import gameBackground from "../../images/gameBackground.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GameSummary() {
  const { game, start } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    if (game.status === "pending") navigate("/", true);
  }, [game.status, navigate]);

  if (!game || game.status === "pending") return <></>;

  return (
    <Stack
      sx={{
        height: 1,
        justifyContent: "space-between",
      }}
    >
      <Stack
        sx={{
          backgroundImage: `url(${gameBackground})`,
          backgroundPosition: "top",
          backgroundSize: "contain",
          backgroundBlendMode: "lighten",
        }}
      >
        <SummaryHeader />

        <Stack
          alignItems="center"
          justifyContent="center"
          direction="column"
          gap={2}
          sx={{ padding: "1rem" }}
        >
          <Stack sx={boxStyle}>
            <EndScore />
          </Stack>
          <Stack sx={boxStyle}>
            <SummaryReview />
          </Stack>
          {/* <Stack
            sx={{ ...boxStyle, backgroundColor: "secondary", color: "#FFF6FA" }}
          >
            <PluralismComic />
          </Stack> */}
          <SummaryRulesReview />
        </Stack>
      </Stack>
      <Stack
        gap={1}
        sx={{
          flexDirection: "row",
          padding: "1rem 2rem",
          height: "6rem",
          bottom: "0",
          width: "100%",
          zIndex: 150,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderTop: "2px solid lightgray",
          position: "sticky",
        }}
      >
        <ShareButton
          sx={{
            fontSize: "0.9rem",
            fontWeight: "500",
            height: "2.7rem",
            padding: "0.5rem 0.5rem",
            boxShadow: "none",
            flex: 1,
          }}
        />
        <Stack
          gap={1}
          sx={{
            border: "1px #646464 solid ",
            padding: "0.5rem 0.5rem",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            borderRadius: "12px",
            cursor: "pointer",
            flex: 1,
          }}
          onClick={() => {
            start();
            navigate("/regame", true);
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
        <Stack
          gap={1}
          sx={{
            flex: 1,
            border: "1px #646464 solid ",
            padding: "0.5rem 0.5rem",
            height: "2.7rem",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            borderRadius: "12px",
            cursor: "pointer",
          }}
          onClick={() => {
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLScMHQ-JwlNL0F9RW7QZEsgzPpPCigf_7y3DQbpceLTDAvcTZg/viewform",
              "_blank"
            );
          }}
        >
          <RateReviewIcon />
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            משוב
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

const boxStyle = {
  padding: "1rem",
  width: "315px",
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "center",
  justifyContent: "center",
  borderRadius: "25px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
};
