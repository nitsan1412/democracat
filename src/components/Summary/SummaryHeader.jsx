import Typography from "@mui/material/Typography";
import hipHipHurray from "../../images/icons/hipHipHurray.svg";

export default function SummaryHeader() {
  return (
    <Typography
      variant="body1"
      sx={{
        backgroundImage: `url(${hipHipHurray})`,
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
