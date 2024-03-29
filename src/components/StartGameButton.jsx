import Button from "@mui/material/Button";

import { useNavigate } from "../helpers/SmartNavigate";
import { useGame } from "../helpers/GameContext";

export default function StartGameButton({ text = "התחל משחק", ...props }) {
  const { start } = useGame();
  const navigate = useNavigate();

  const onClick = () => {
    start();
    navigate("/game", true);
  };

  return (
    <Button
      variant="contained"
      color="black"
      onClick={onClick}
      fullWidth
      disableElevation
      sx={{
        fontSize: "1.3rem !important",
        height: "3rem",
        position: "inherit",
      }}
      cursor="pointer"
    >
      למשחק
    </Button>
  );
}
