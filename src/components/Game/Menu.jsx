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
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      margin="1rem"
      minWidth="100%"
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: "3rem" }}
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

          <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
            חזרה
          </Typography>
        </Stack>
      </Stack>
      <Chip label={<Score />} variant="outlined" sx={Menu.styles.button} />
      <Chip label={<Timer />} variant="outlined" sx={Menu.styles.button} />
    </Stack>
  );
}

Menu.styles = {
  button: {
    borderColor: "#ECECEC",
  },
};
