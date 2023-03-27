import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Character from "./Game/Character";
import { useGame } from "../helpers/GameContext";

export default function StartGameMenu() {
  const { start } = useGame();

  return (
    <Stack alignItems="center" gap={2} sx={{ padding: "1rem" }}>
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
        <Character.Image
          key="orthodox-man"
          characterType="orthodox-man"
          sx={StartGameMenu.characterStyles}
        />
        <Character.Image
          key="arab-woman"
          characterType="arab-woman"
          sx={StartGameMenu.characterStyles}
        />
      </Stack>
      <Stack direction="row" gap={2}>
        <Character.Image
          key="secular-woman"
          characterType="secular-woman"
          sx={StartGameMenu.characterStyles}
        />
        <Character.Image
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
