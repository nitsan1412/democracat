import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import CharacterImage from "./Game/CharacterImage";
import { useGame } from "../helpers/GameContext";

export default function StartGameMenu() {
  const { start } = useGame();
  const highestScoreToShow = {
    highestScore: localStorage.getItem("highest-score"),
    date: localStorage.getItem("highest-score-dateTime"),
  };
  return (
    <Stack alignItems="center" sx={{ padding: "1rem" }}>
      <Typography variant="h3" sx={{ fontWeight: "700" }}>
        DemocraCat
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "700" }}>
        למען פלורליזם חברתי
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
        כמה חתולים יגיעו ליעד
      </Typography>

      <Stack direction="row" gap={2}>
        <CharacterImage
          key="orthodox-man"
          characterType="orthodox-man"
          sx={StartGameMenu.characterStyles}
        />
        <CharacterImage
          key="arab-woman"
          characterType="arab-woman"
          sx={StartGameMenu.characterStyles}
        />
      </Stack>
      {localStorage.getItem("highest-score") && (
        <Stack direction="row" gap={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
            הניקוד הגבוה ביותר שלך:
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
            {highestScoreToShow.highestScore}
          </Typography>
        </Stack>
      )}
      {highestScoreToShow.highestScore && (
        <Stack direction="row" gap={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
            מתאריך:{" "}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
            {highestScoreToShow.date}
          </Typography>
        </Stack>
      )}
      <Stack direction="row" gap={2}>
        <CharacterImage
          key="secular-woman"
          characterType="secular-woman"
          sx={StartGameMenu.characterStyles}
        />
        <CharacterImage
          key="religious-man"
          characterType="religious-man"
          sx={StartGameMenu.characterStyles}
        />
      </Stack>

      <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
        מי יצליח ליצר מגון רחב של מגזרים ומגדרים שונים
      </Typography>

      <Button variant="contained" fullWidth onClick={start}>
        להתחיל
      </Button>
    </Stack>
  );
}
StartGameMenu.characterStyles = {
  width: 150,
  height: 150,
};
