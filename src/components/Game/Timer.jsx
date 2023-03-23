import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useGame } from "../../helpers/GameContext";

export default function Timer() {
  const { game } = useGame();
  return (
    <Grid
      // direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ padding: "0.5rem", height: "3rem", zIndex: 99 }}
    >
      {/* <Button
        variant="text"
        sx={{ ...Timer.styles, left: 90 }}
        onClick={game.paused ? resumeGame : pauseGame}
      >
        {game.paused ? "המשך" : "עצור"}
      </Button> */}
      <Typography sx={Timer.styles}>{Timer.displayTime(game.time)}</Typography>
    </Grid>
  );
}

Timer.displayTime = (seconds) =>
  `${Timer.twoDigits(seconds / 60)}:${Timer.twoDigits(seconds % 60)}`;

Timer.twoDigits = (num) => String(Math.floor(num)).padStart(2, "0");

Timer.styles = {
  position: "absolute",
  top: 0,
  left: 0,
  height: "3rem",
  lineHeight: "3rem",
  fontSize: "1.2rem",
  color: "white",
  paddingLeft: "1rem",
};
