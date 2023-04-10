import Stack from "@mui/material/Stack";
import Rule from "./Rule";
import cnesetInPagra from "../../images/cnesetInPagra.svg";
import { Typography } from "@mui/material";

export default function RuleChoice(props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      alignSelf="center"
      justifyContent="center"
      sx={{
        padding: props.rule && "1rem",
        gap: props.rule && "1rem",
        width: !props.rule ? "fit-content" : "100%",
        height: "20vh",
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
          <img src={cnesetInPagra} alt="" />
        </Stack>
      )}
    </Stack>
  );
}
