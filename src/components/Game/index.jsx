import { useEffect } from "react";
import { useGame } from "../../helpers/GameContext";
import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";
import RuleChoice from "./RuleChoice";
import Board from "./Board";
import Menu from "./Menu";
import RuleActions from "./RuleActions";
import gameBackground from "../../images/gameBackground.png";
import pillow from "../../images/icons/pillow.svg";

export default function Game() {
  const { game } = useGame();
  const navigate = useNavigate();
  const rule = game.ruleManager.nextRule;

  useEffect(() => {
    if (game.status === "pending") navigate("/");
    else if (game.status === "over") navigate("/summery");
  }, [game.status, navigate]);
  if (game.status === "pending") return <></>;
  return (
    <Stack alignItems="stretch">
      <Stack alignItems="space-between" height="10vh">
        <Menu />
      </Stack>
      <Stack
        sx={{
          backgroundImage: `url(${gameBackground})`,
        }}
      >
        <Stack
          sx={{
            height: "20vh",
          }}
        >
          <RuleChoice rule={rule || {}} />
        </Stack>
        <Stack
          sx={{
            height: "50vh",
          }}
        >
          <Board />
        </Stack>
      </Stack>
      <Stack
        sx={{
          height: "10vh",
        }}
      >
        <img src={pillow} alt="" height="45rem" />
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
