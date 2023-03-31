import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import CharacterImage from "../Game/CharacterImage";
import { useGame } from "../../helpers/GameContext";

export default function StartGameMenu() {
  const { start } = useGame();
  const highestScoreToShow = {
    highestScore: localStorage.getItem("highest-score"),
    date: localStorage.getItem("highest-score-dateTime"),
  };
  return (
    <Stack alignItems="center" sx={{ padding: "3rem", height: 1 }}>
      <Typography variant="h3" sx={{ fontWeight: "700", marginBottom: '-0.5rem' }}>
        מיציטופיה
      </Typography>
      <Typography variant="h5">
        למען פלורליזם חברתי
      </Typography>
      <Stack sx={{ flexGrow: 1, '*': { fontSize: '1.2rem', height: "3rem" }, width: 0.6 }} gap={1} justifyContent="center">
        <Button fullWidth disableElevation variant="contained" color="primary">למשחק</Button>
        <Button fullWidth disableElevation variant="outlined" color="secondary" sx={{ borderWidth: 2 }}>הוראות</Button>
      </Stack>
    </Stack>
  );
}
StartGameMenu.characterStyles = {
  width: 150,
  height: 150,
};
