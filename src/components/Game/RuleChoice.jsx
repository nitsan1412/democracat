import Stack from "@mui/material/Stack";
import Rule from "./Rule";
import knessetInBreake from "../../images/knessetInBreake.svg";

export default function RuleChoice(props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      alignSelf="center"
      justifyContent="center"
      sx={{
        padding: "0.5rem",
        height: "10rem",
        width: "22rem",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <img src={knessetInBreake} alt="" />
      </Stack>
      {props.rule?.initialInfo ? (
        <Rule rule={props.rule} />
      ) : (
        <Stack
          sx={{
            direction: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={knessetInBreake} alt="" />
        </Stack>
      )}
    </Stack>
  );
}
