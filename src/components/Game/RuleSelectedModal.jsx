import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useGame } from "../../helpers/GameContext";
import RuleImpact from "./RuleImpact";

export default function RuleSelectedModal(props) {
  const { game } = useGame();
  return (
    <Stack sx={{ ...style }}>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Typography
          id="modal-modal-title"
          variant="overline"
          sx={{ fontSize: "0.9rem", color: "primary" }}
        >
          הצעת החוק עברה בהצלחה
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h6"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            justifyContent: "center",
          }}
        >
          {props.rule.name}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h6"
          sx={{
            fontSize: "0.9rem",
            fontWeight: 600,
            justifyContent: "center",
          }}
        >
          {props.rule.initialInfo || ""}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        minHeight="10rem"
      >
        <RuleImpact rule={props.rule} />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        marginTop="1rem"
      >
        <Typography
          id="modal-modal-title"
          variant="button"
          sx={{
            fontSize: "0.9rem",
            alignItems: "center",
            textDecoration: "underline",
          }}
          onClick={() => {
            game.resume();
            props.setOpenModal(false);
          }}
        >
          {" "}
          הצעת החוק הבאה
        </Typography>
        <ChevronLeftIcon />
      </Stack>
    </Stack>
  );
}
const style = {
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  display: "flex",
  flexDirection: "column",
  paddingTop: "12px",
};
