import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { useGame } from "../../helpers/GameContext";
import { playSound } from "../../helpers/Sounds";
import RuleImpact from "./RuleImpact";

export default function RuleActions({ rule }) {
  const { game } = useGame();
  const [openModal, setOpenModal] = useState(false);
  return (
    <Stack
      width={1}
      direction="row-reverse"
      justifyContent="space-evenly"
      sx={{ ".MuiStack-root": { height: "4.5rem !important" } }}
    >
      <Button
        variant="outlined"
        size="small"
        color="success"
        startIcon={
          <ThumbUpOffAltIcon sx={{ marginRight: "-8px", marginLeft: "8px" }} />
        }
        onClick={() => {
          game.chooseRule(rule);
          setOpenModal(true);
          game.pause();
          rule.name === "חוק תקשורת" ? playSound("donkey") : playSound("meow");
        }}
      >
        אישור
      </Button>
      <Button
        variant="outlined"
        size="small"
        color="error"
        startIcon={
          <ThumbDownOffAltIcon
            sx={{ marginRight: "-8px", marginLeft: "8px" }}
          />
        }
        onClick={() => {
          game.declineRule(rule);
          game.resetNextRule();
        }}
      >
        דחייה
      </Button>
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        sx={{ borderRadius: 15 }}
      >
        <Box sx={style} gap={3}>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            {rule.name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            עבר בהצלחה
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            {rule.info || ""}
          </Typography>
          <RuleImpact rule={rule} />
          <Button
            // sx={buttonStyle}
            variant="outlined"
            onClick={() => {
              game.resume();
              game.resetNextRule();
              setOpenModal(false);
            }}
          >
            המשך משחק
          </Button>
        </Box>
      </Dialog>
    </Stack>
  );
}
const style = {
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};
// const buttonStyle = {
//   borderRadius: 25,
//   border: black
// };
