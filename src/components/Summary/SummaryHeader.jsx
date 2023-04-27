import Typography from "@mui/material/Typography";
import endGame from "../../images/animations/endGameGif.gif";
import newRecord from "../../images/animations/newRecordGif.gif";
import { useGame } from "../../helpers/GameContext";

export default function SummaryHeader() {
  const { game } = useGame();

  return (
    <Typography
      variant="body1"
      color="secondary"
      sx={{
        backgroundImage: `url(${
          game.gameSummary.isHighScore ? newRecord : endGame
        })`,
        backgroundRepeat: "none",
        backgroundPosition: "center",
        margin: "0 1rem",
        width: "calc(100% - 2rem)",
        textAlign: "center",
        fontSize: "3.1rem",
        padding: "1rem 0rem",
      }}
    >
      {game.gameSummary.isHighScore ? "שברת שיא!" : "סיימת את המשחק"}
    </Typography>
  );
}
