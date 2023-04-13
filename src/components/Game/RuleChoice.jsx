import Stack from "@mui/material/Stack";
import Rule from "./Rule";
import knessetInBreake from "../../images/knessetInBreake.svg";
import { Typography } from "@mui/material";

export default function RuleChoice(props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      alignSelf="center"
      justifyContent="center"
      sx={{
        padding: "0.5rem",
        height: "10rem"
      }}
    >
      {props.rule?.info ? (
        <Rule rule={props.rule} />
      ) : (
        <Stack
          sx={{
            direction: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "black" }}>
            הכנסת בפגרה{" "}
          </Typography>
          <Typography variant="h6" sx={{ color: "black", fontSize: "0.9rem" }}>
            5 שניות הפסקה{" "}
          </Typography>
          <img src={knessetInBreake} alt="" />
        </Stack>
      )}
    </Stack>
  );
}
