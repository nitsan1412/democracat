import Stack from "@mui/material/Stack";

import Timer from "./Timer";
import Score from "./Score";
import RuleChoice from "./RuleChoice";
import Board from "./Board";
import Menu from "../Menu";

export default function Game() {
  return (
    <Stack alignItems="center" >
      <Menu/>
      <Timer />
      <Score />
      <RuleChoice />
      <Board />
    </Stack>
  );
}
