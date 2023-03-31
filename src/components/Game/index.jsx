import Stack from "@mui/material/Stack";
import RuleChoice from "./RuleChoice";
import Board from "./Board";
import Menu from "./Menu";

export default function Game() {
  return (
    <Stack alignItems="stretch" margin={2}>
      <Stack alignItems="space-between">
        <Menu />
      </Stack>
      <RuleChoice />
      <Board />
    </Stack>
  );
}
