import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import emptyCat from "../../images/icons/emptyCat.svg";
import { useGame } from "../../helpers/GameContext";

export default function EndScore() {
  const { game } = useGame();

  return (
    <Stack alignItems="center">
      <Stack
        gap={1}
        height={1}
        flexDirection="column"
        alignItems="center"
        alignSelf="center"
        justifyContent="center"
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            flex: 5,
            fontSize: "1rem",
            fontWeight: 700,
          }}
        >
          זה הניקוד שלך
        </Typography>
        <Stack
          flexDirection="row-reverse"
          gap={2}
          sx={{
            border: "1px #ECECEC solid ",
            borderRadius: "25px",
            padding: "0.4rem 3rem",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              flex: 5,
              fontSize: "1.1rem",
              fontWeight: 400,
            }}
          >
            {game.bonusScore + game.getScore}
          </Typography>
          <img src={emptyCat} alt="" />
        </Stack>
      </Stack>
      <Stack gap={1} height={1} flexDirection="row" alignItems="center">
        <Typography
          variant="body1"
          sx={{
            fontSize: "0.9rem",
            fontWeight: 400,
            textDecoration: "underline",
          }}
        >
          כולל בונוס
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "0.9rem",
            fontWeight: 400,
          }}
        >
          על סך
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "0.9rem",
            fontWeight: 400,
          }}
        >
          {game.bonusScore} נקודות!
        </Typography>
      </Stack>
    </Stack>
  );
}
