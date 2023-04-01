<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
>>>>>>> 18aa72f3503ba6765556e57ffba778b99e9c54b4
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import InstructionsButton from "./Instructions"
import StartGameButton from "../StartGameButton"

export default function StartGameMenu () {
  const highestScoreToShow = {
    highestScore: localStorage.getItem("highest-score"),
    date: localStorage.getItem("highest-score-dateTime"),
  };

  return (
    <Stack alignItems="center" sx={{ padding: "3rem", height: 1 }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "700", marginBottom: "-0.5rem" }}
      >
        מיציטופיה
      </Typography>
      <Typography variant="h5">
        למען פלורליזם חברתי
      </Typography>
      <Stack sx={{ flexGrow: 1, width: 0.6 }} gap={1} justifyContent="center">
        <StartGameButton />
        <InstructionsButton fullWidth disableElevation variant="outlined" color="secondary" sx={{ borderWidth: 2, fontSize: '1.3rem !important', height: "3rem" }}/>
      </Stack>
    </Stack>
  );
}
StartGameMenu.characterStyles = {
  width: 150,
  height: 150,
};
