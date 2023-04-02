import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Timer from "./Timer";
import Score from "./Score";
import { Chip } from "@mui/material";
import backArrow from "../../images/icons/backArrow.svg";

export default function Menu() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      margin="1rem"
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: "3rem" }}
      >
        <Stack direction="row" gap={1}>
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
