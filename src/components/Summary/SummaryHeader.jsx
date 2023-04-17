import Typography from "@mui/material/Typography";
import endGame from "../../images/animations/endGame.gif";
import newRecord from "../../images/animations/newRecord.gif";
import { useGame } from "../../helpers/GameContext";

export default function SummaryHeader() {
  const { game } = useGame();

  return (
    <Typography
      variant="body1"
      sx={{
        backgroundImage: `url(${
          game.scoreManager.isHighScore ? newRecord : endGame
        })`,
        backgroundRepeat: "round",
        backgroundPosition: "center",
        margin: "0 1rem",
        width: "calc(100% - 2rem)",
        textAlign: "center",
        fontSize: "1.6rem",
        fontWeight: 700,
        color: "#FC68B4",
        padding: "1rem 0rem",
      }}
    >
      סיימת את המשחק!
    </Typography>
  );
}
