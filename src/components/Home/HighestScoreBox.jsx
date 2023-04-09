import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import emptyCat from "../../images/icons/emptyCat.svg";

export default function HighestScoreBox(props) {
  return (
    <Stack
      alignItems="center"
      sx={{
        border: "2px #ECECEC solid ",
        padding: "0.5rem",
        width: "315px",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: "25px",
        backgroundColor: "white",
      }}
    >
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
            flex: 5,
            fontSize: "1rem",
            fontWeight: 700,
          }}
        >
          הניקוד הגבוה ביותר שלך
        </Typography>
        <Stack
          flexDirection="row-reverse"
          gap={2}
          sx={{
            border: "1px #ECECEC solid ",
            borderRadius: "25px",
            padding: "0.6rem 3rem",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              flex: 5,
              fontSize: "1.1rem",
              fontWeight: 400,
            }}
          >
            {props.highestScoreToShow.highestScore}
          </Typography>
          <img src={emptyCat} alt="" />
        </Stack>
      </Stack>
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
            flex: 5,
            fontSize: "0.9rem",
            fontWeight: 400,
          }}
        >
          מתאריך {props.highestScoreToShow.date}
        </Typography>
      </Stack>
    </Stack>
  );
}
