import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Character from "./Game/Character";
import { useGame } from "../helpers/GameContext";

export default function StartGameMenu() {
  const { start } = useGame();

  return (
    <Stack alignItems="center" gap={2} sx={{ padding: "1rem" }}>
      <Typography variant="h2">DemocRun</Typography>
      <Typography variant="h4">למען פלורליזם חברתי</Typography>
      <Stack direction="row" gap={2}>
        <Character.Image
          characterType="orthodox-man"
          sx={{ width: "calc(50vw - 2rem)", height: "calc(50vw - 2rem)" }}
        />
        <Character.Image
          characterType="arab-woman"
          sx={{ width: "calc(50vw - 2rem)", height: "calc(50vw - 2rem)" }}
        />
      </Stack>
      <Stack direction="row" gap={2}>
        <Character.Image
          characterType="secular-woman"
          sx={{ width: "calc(50vw - 2rem)", height: "calc(50vw - 2rem)" }}
        />
        <Character.Image
          characterType="religious-man"
          sx={{ width: "calc(50vw - 2rem)", height: "calc(50vw - 2rem)" }}
        />
      </Stack>
      <Button variant="contained" fullWidth onClick={start}>
        להתחיל
      </Button>
    </Stack>
  );
}
