import { useNavigate } from "react-router-dom";

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
      sx={{ width: "100%", flex: 1, height: "4rem", "+*": { height: "calc(100% - 4rem)" } }}
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
        <Typography variant="subtitle1" sx={{  }}>
          חזרה
        </Typography>
      </Stack>
      <Stack
         direction="row"
         gap={1}
      >
        <Stack
          direction="row"
          gap={1}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={backArrow} alt="" />

          <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
            חזרה
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

Menu.styles = {
  button: {
    height: "2.5rem",
    borderColor: "#ECECEC",
    borderRadius: "1.25rem"
  },
};
