import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button";

import { useGame } from "../helpers/GameContext";

export default function StartGameButton ({ text = 'התחל משחק', ...props }) {
  const { start } = useGame();
  const navigate = useNavigate()

  const onClick = () => {
    start()
    navigate('/game')
  }

  return <Button variant="contained" color="black" onClick={onClick} fullWidth disableElevation sx={{ fontSize: '1.3rem !important', height: "3rem" }}>למשחק</Button>
}
