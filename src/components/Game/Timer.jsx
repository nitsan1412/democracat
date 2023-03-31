import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { useGame } from "../../helpers/GameContext";
import timer from "../../images/icons/timer.svg";
export default function Timer() {
  const { game } = useGame();
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" gap={2}>
      <img src={timer} alt="" />
      <Typography sx={Timer.styles}> {Timer.displayTime(game.time)}</Typography>
    </Stack>
  );
}

Timer.displayTime = (seconds) =>
  `${Timer.twoDigits(seconds / 60)}:${Timer.twoDigits(seconds % 60)}`;

Timer.twoDigits = (num) => String(Math.floor(num)).padStart(2, "0");

Timer.styles = {
  fontSize: "0.7rem",
  color: "#303030",
};
