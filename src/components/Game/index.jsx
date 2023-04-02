import { useEffect } from "react";
import { useGame } from "../../helpers/GameContext";
import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";
import RuleChoice from "./RuleChoice";
import Board from "./Board";
import Menu from "./Menu";

export default function Game() {
  const { game } = useGame();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("game", game.status);
    if (game.status === "pending") navigate("/");
    else if (game.status === "over") navigate("/summery");
  }, [game.status, navigate]);

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
