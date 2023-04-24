import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import Timer from "./Timer";
import Score from "./Score";
import backArrow from "../../images/icons/backArrow.svg";
import soundOn from "../../images/icons/soundOn.svg";
import soundOff from "../../images/icons/soundOff.svg";

import { useNavigate } from "../../helpers/SmartNavigate";
import { useGame } from "../../helpers/GameContext";

export default function Menu() {
  const navigate = useNavigate();
  const { game, changeGameSounds } = useGame();

  return (
    <Stack
      position="static"
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      sx={{
        width: "100%",
        height: "4rem",
        "+*": { height: "calc(100% - 4rem)" },
      }}
    >
      <Stack
        direction="row"
        gap={1}
        onClick={() => {
          navigate("/", true);
        }}
      >
        <img src={backArrow} alt="" />
        <Typography variant="subtitle1" sx={{}}>
          חזרה
        </Typography>
      </Stack>
      <Stack direction="row" gap={1}>
        <Chip label={<Score />} variant="outlined" sx={Menu.styles.button} />
        <Chip label={<Timer />} variant="outlined" sx={Menu.styles.button} />
      </Stack>
      <Stack
        onClick={() => {
          changeGameSounds();
        }}
      >
        <img
          src={game.isGameMuted ? soundOff : soundOn}
          alt={game.isGameMuted ? "הפעל קול" : "השתק"}
        />
      </Stack>
    </Stack>
  );
}

Menu.styles = {
  button: {
    height: "2.5rem",
    borderColor: "#ECECEC",
    borderRadius: "1.25rem",
  },
};
