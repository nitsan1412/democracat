import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CatStars from "./CatStars";

export default function EndScore({ gameSummary }) {
  return (
    <Stack
      gap={1}
      height={1}
      flexDirection="column"
      alignItems="center"
      alignSelf="center"
      justifyContent="center"
    >
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          fontSize: "1.1rem",
          fontWeight: 600,
        }}
      >
        הניקוד הסופי &nbsp;&nbsp;{gameSummary.bonusScore + gameSummary.score}
      </Typography>
      <Stack
        flexDirection="row-reverse"
        gap={2}
        sx={{
          border: "1px #ECECEC solid ",
          borderRadius: "25px",
          padding: "0.4rem 1rem",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            fontSize: "1.1rem",
            fontWeight: 400,
          }}
        >
          <CatStars gameSummary={gameSummary} />
        </Typography>
      </Stack>

      <Typography
        variant="body1"
        sx={{
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
        }}
      >
        {gameSummary.score}&nbsp;&nbsp; חתולים הגיעו לכרית
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "0.8rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
        }}
      >
        {gameSummary.bonusScore}&nbsp;&nbsp; נקודות
        <b> בונוס</b>&nbsp; עבור פלורליזם
      </Typography>
    </Stack>
  );
}
