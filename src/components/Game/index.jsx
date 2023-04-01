import Stack from "@mui/material/Stack";
import RuleChoice from "./RuleChoice";
import Board from "./Board";
import Menu from "./Menu";

export default function Game() {
  return (
    <Stack alignItems="stretch">
      <Stack alignItems="space-between" height="10vh">
        <Menu />
      </Stack>
      <Stack
        sx={{
          height: "20vh",
        }}
      >
        <RuleChoice />
      </Stack>
      <Board />
    </Stack>
  );
}
