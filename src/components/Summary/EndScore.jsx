import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import emptyCat from "../../images/icons/emptyCat.svg";
import { useGame } from "../../helpers/GameContext";

export default function EndScore() {
  const { game } = useGame();

  return (
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
          fontSize: "1.1rem",
          fontWeight: 600,
        }}
      >
        הניקוד הסופי{" "}
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
            fontSize: "1.1rem",
            fontWeight: 400,
          }}
        >
          {game.gameSummary.bonusScore + game.gameSummary.score}
        </Typography>
        <img src={emptyCat} alt="" />
      </Stack>
      <Typography
        variant="body1"
        sx={{
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
        }}
      >
        {game.gameSummary.score}&nbsp;&nbsp; עבור החתולים שעברו
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
        }}
      >
        {game.gameSummary.bonusScore}&nbsp;&nbsp; בונוס עבור פלורליזם
      </Typography>
    </Stack>
  );
}
