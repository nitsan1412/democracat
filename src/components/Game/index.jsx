import Stack from "@mui/material/Stack";

import Timer from "./Timer";
import Score from "./Score";
import RuleChoice from "./RuleChoice";
import Board from "./Board";

export default function Game() {
  return (
    <Stack alignItems="center" >
      <Timer />
      <Score />
      <RuleChoice />
      <Board />
    </Stack>
  );
}
