import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import hipHipHurray from "../../images/icons/hipHipHurray.svg";
export default function SummaryHeader() {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${hipHipHurray})`,
        backgroundRepeat: "round",
        width: "90%",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          fontSize: "1.6rem",
          fontWeight: 700,
          color: "#FC68B4",
          margin: "1rem 0rem",
        }}
      >
        סיימת את המשחק!
      </Typography>
    </Stack>
  );
}
