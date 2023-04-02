import Stack from "@mui/material/Stack";
import Rule from "./Rule";

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
      {props.rule ? (
        <Rule rule={props.rule} />
      ) : (
        <Stack
          sx={{
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "black" }}>
            המתן לחוקים חדשים. הכנסת בפגרה
          </Typography>
        </Stack>
      )}
    </Stack>
  );
}
