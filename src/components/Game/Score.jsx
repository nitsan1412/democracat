import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useGame } from "../../helpers/GameContext";
import emptyCat from "../../images/icons/emptyCat.svg";

export default function Score() {
  const { game } = useGame();
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" gap={2}>
      <img src={emptyCat} alt="" />
      <Typography sx={Score.styles}> {game.score}</Typography>
    </Stack>
  );
}

Score.styles = {
  fontSize: "0.7rem",
  color: "#303030",
};
