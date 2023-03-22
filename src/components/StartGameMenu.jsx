import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Character from "./Game/Character";
import { useGame } from "../helpers/GameContext";

export default function StartGameMenu() {
  const { start } = useGame();

  return (
    <Stack alignItems="center" gap={2} sx={{ padding: "1rem" }}>
      <Typography variant="h2">DemocraCat</Typography>
      <Typography variant="h4">למען פלורליזם חברתי</Typography>
      <Stack direction="row" gap={2}>
        <Character.Image
          characterType="orthodox-man"
          sx={StartGameMenu.characterStyles}
        />
        <Character.Image
          characterType="arab-woman"
          sx={StartGameMenu.characterStyles}
        />
      </Stack>
      <Stack direction="row" gap={2}>
        <Character.Image
          characterType="secular-woman"
          sx={StartGameMenu.characterStyles}
        />
        <Character.Image
          characterType="religious-man"
          sx={StartGameMenu.characterStyles}
        />
      </Stack>
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
