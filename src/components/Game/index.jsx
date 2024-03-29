import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import RuleChoice from "./RuleChoice";
import Board from "./Board";
import Menu from "./Menu";
import RuleActions from "./RuleActions";
import gameBackground from "../../images/gameBackground.png";

import { useNavigate } from "../../helpers/SmartNavigate";
import { useGame } from "../../helpers/GameContext";

export default function Game() {
  const { game, cancelMusic } = useGame();
  const navigate = useNavigate();
  const rule = game?.ruleManager?.nextRule;

  useEffect(() => {
    if (!game || game.status === "pending") navigate("/", true);
    else if (game.status === "over") {
      cancelMusic();
      navigate("/summary", true);
    }
  }, [game, cancelMusic, game.status, navigate]);

  if (!game || game.status === "pending") return <></>;

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
          backgroundSize: "contain",
        }}
      >
        <RuleChoice rule={rule || {}} />
        <Board />
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            padding: "1rem",
            height: "5rem",
            borderTop: "2px solid lightgray",
          }}
        >
          {game.time > 0.5 ? rule ? <RuleActions rule={rule} /> : "" : ""}
        </Stack>
      </Stack>
    </Stack>
  );
}
