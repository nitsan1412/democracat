import Stack from "@mui/material/Stack";
import { useWindowWidth } from "@react-hook/window-size";
import { useGame } from "../../helpers/GameContext";
import Rule from "./Rule";

import { Typography } from "@mui/material";

export default function RuleChoice() {
  const currentWidth = useWindowWidth();

  const { game } = useGame();
  const rule = game.nextRule;

  return (
    <Stack
      direction="row"
      alignItems="center"
      alignSelf="center"
      justifyContent="center"
      sx={{
        padding: rule && "1rem",
        gap: rule && "1rem",
        maxWidth: !rule ? "fit-content" : currentWidth > 450 ? 250 : "85vw",
        height: "20vh",
      }}
    >
      {rule ? (
        <Rule rule={rule} />
      ) : (
        <Stack
          sx={{
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" sx={{ color: "black" }}>
            הכנסת בפגרה
          </Typography>
        </Stack>
      )}
    </Stack>
  );
}
