import { useNavigate } from "react-router-dom";
import { useGame } from "../../helpers/GameContext";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import Timer from "./Timer";
import Score from "./Score";
import backArrow from "../../images/icons/backArrow.svg";

export default function Menu() {
  const { newGame } = useGame();
  const navigate = useNavigate();

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
          newGame();
          navigate("/");
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
