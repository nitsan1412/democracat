import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useGame } from "../../helpers/GameContext";

export default function Timer() {
  const { game } = useGame();
  return (
    <Grid alignItems="center" justifyContent="center">
      <Typography sx={Timer.styles}>{Timer.displayTime(game.time)}</Typography>
    </Grid>
  );
}

Timer.displayTime = (seconds) =>
  `${Timer.twoDigits(seconds / 60)}:${Timer.twoDigits(seconds % 60)}`;

Timer.twoDigits = (num) => String(Math.floor(num)).padStart(2, "0");

Timer.styles = {
  position: "absolute",
  marginTop: -6,
  marginRight: 13,
  height: "3rem",
  lineHeight: "3rem",
  fontSize: "1.2rem",
  color: "white",
  paddingLeft: "1rem",
  zIndex: 300,
};
