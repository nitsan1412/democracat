import { useEffect } from "react";
import { useGame } from "../../helpers/GameContext";
import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";
import RuleChoice from "./RuleChoice";
import Board from "./Board";
import Menu from "./Menu";
import RuleActions from "./RuleActions";

export default function Game() {
  const navigate = useNavigate();
  const { game } = useGame();

  useEffect(() => {
    if (game.status === "pending") navigate("/");
  }, [game.status, navigate]);

  const rule = game.nextRule;
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
        <RuleChoice rule={rule || {}} />
      </Stack>
      <Stack
        sx={{
          height: "60vh",
        }}
      >
        <Board />
      </Stack>
      <Stack
        sx={{
          height: "10vh",
        }}
      >
        {rule ? <RuleActions rule={rule} /> : ""}
      </Stack>
    </Stack>
  );
}
