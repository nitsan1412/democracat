import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import { useGame } from "../../helpers/GameContext";
import RuleImpact from "./RuleImpact";

export default function RuleSelectedModal(props) {
  const { game } = useGame();
  return (
    <Box sx={style}>
      <Stack direction="row" alignItems="center">
        <Typography
          id="modal-modal-title"
          variant="button"
          sx={{
            fontSize: "0.8rem",
            alignItems: "center",
            width: "2rem",
          }}
        >
          <ClearIcon
            sx={{ marginRight: "-8px", marginLeft: "8px" }}
            onClick={() => {
              game.resume();
              props.setOpenModal(false);
            }}
          />
        </Typography>
        <Typography
          id="modal-modal-title"
          variant="overline"
          sx={{ fontSize: "0.9rem", color: "#79C300" }}
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
            // width: "2rem",
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
        minHeight="10rem"
      >
        <RuleImpact rule={props.rule} />
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
            // width: "2rem",
          }}
        >
          {props.rule.info || ""}
        </Typography>
      </Stack>
    </Box>
  );
}
const style = {
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  paddingTop: "12px",
};