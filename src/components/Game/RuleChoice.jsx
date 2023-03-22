import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography'

import { useGame } from "../../helpers/GameContext";
import Rule from "./Rule";

export default function RuleChoice() {
  const { game } = useGame()
  const rule = game.nextRule

  return (
    <Stack direction="row" alignItems='center' justifyContent='center' sx={{ padding: "1rem", gap: "1rem", height: '10rem' }}>
      {rule ? <Rule rule={rule} /> : <Typography variant='h3'>הכנסת בפגרה</Typography>}
    </Stack>
  );
}
