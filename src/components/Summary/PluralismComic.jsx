import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import whatIsPluralism from "../../images/icons/whatIsPluralism.svg";

export default function PluralismComic() {
  return (
    <Stack alignItems="center" gap={1}>
      <Stack sx={{ position: "absolute", left: 30, zIndex: 900 }}>
        <img src={whatIsPluralism} alt="" width="60px" height="60px" />
      </Stack>
      <Stack sx={{ position: "absolute", right: 50, zIndex: 900 }}>
        <img src={whatIsPluralism} alt="" width="80px" height="80px" />
      </Stack>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          flex: 5,
          fontSize: "1.2rem",
          fontWeight: 600,
        }}
      >
        מה זה פלורליזם?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          flex: 5,
          fontSize: "1rem",
          // fontWeight: 600,
        }}
      >
        הכנו במיוחד בשבילכם קומיקס קצר{" "}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          flex: 5,
          fontSize: "1rem",
          // fontWeight: 700,
        }}
      >
        שנותן דוגמאות בעזרת קהילת החתולים{" "}
      </Typography>
      <Button
        variant="contained"
        // color="#FC68B4"
        // onClick={() => {}}
        // fullWidth
        // disableElevation
        sx={{
          fontSize: "1rem",
          fontWeight: "700",
          margin: "1rem",
          paddingX: "1rem",
          // height: "3rem",
          color: "#FC68B4",
          backgroundColor: "#FFFFFF",
        }}
        // cursor="pointer"
      >
        לקריאת הקומיקס
      </Button>
    </Stack>
  );
}
