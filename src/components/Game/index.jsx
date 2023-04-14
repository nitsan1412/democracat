import { useEffect } from "react";
import { useGame } from "../../helpers/GameContext";
import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";
import RuleChoice from "./RuleChoice";
import Board from "./Board";
import Menu from "./Menu";
import RuleActions from "./RuleActions";
import gameBackground from "../../images/gameBackground.png";

export default function Game() {
  const { game } = useGame();
  const navigate = useNavigate();
  const rule = game.ruleManager.nextRule;

  useEffect(() => {
    if (game.status === "pending") navigate("/");
    else if (game.status === "over") navigate("/summary");
  }, [game.status, navigate]);

  if (game.status === "pending") return <></>;

  return (
    <Stack
      sx={{
        height: 1,
      }}
    >
      <Menu />
      <Stack
        sx={{
          backgroundImage: `url(${gameBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "contain"
        }}
      >
        <RuleChoice rule={rule || {}} />
        <Board />
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            padding: "1rem",
            marginTop: "1rem",
            height: "5rem",
            borderTop: '2px solid lightgray'
          }}
        >
          {rule ? <RuleActions rule={rule} /> : ""}
        </Stack>
      </Stack>
    </Stack>
  );
}
