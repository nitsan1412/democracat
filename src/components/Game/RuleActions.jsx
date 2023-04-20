import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { useGame } from "../../helpers/GameContext";
import { playSound } from "../../helpers/Sounds";
import RuleSelectedModal from "./RuleSelectedModal";

export default function RuleActions(props) {
  const { game, declineRule, chooseRule } = useGame();
  const [openModal, setOpenModal] = useState(false);

  return (
    <Stack width={1} direction="row" justifyContent="space-evenly">
      <Stack
        width="40%"
        height="2.5rem"
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "#F2F9E5",
          border: "#A6D756 2px solid",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          chooseRule(props.rule);
          setOpenModal(true);
          game.pause();
          props.rule.name === "חוק תקשורת"
            ? playSound(
                "muted",
                game.isGameMuted ||
                  game.characterManager.characterTypes[0].muted
              )
            : playSound(
                "meow",
                game.isGameMuted ||
                  game.characterManager.charactersInPlay()[0].type.muted
              );
        }}
      >
        <CheckIcon
          sx={{ marginRight: "-8px", marginLeft: "8px", color: "#A6D756" }}
        />
        <Typography
          variant="button"
          size="small"
          backgroundColor="#F2F9E5"
          color="#A6D756"
        >
          אישור
        </Typography>
      </Stack>
      <Stack
        width="40%"
        height="2.5rem"
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: "#FFF0F7",
          border: "#FD8DC7 2px solid",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          declineRule(props.rule);
        }}
      >
        <ClearIcon
          sx={{ marginRight: "-8px", marginLeft: "8px", color: "#FD8DC7" }}
        />
        <Typography
          variant="button"
          size="small"
          backgroundColor="#FFF0F7"
          color="#FD8DC7"
          sx={{ fontWeight: 600 }}
        >
          דחייה
        </Typography>
      </Stack>
      <Dialog
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          game.resume();
        }}
        sx={{ borderRadius: 15 }}
      >
        <RuleSelectedModal rule={props.rule} setOpenModal={setOpenModal} />
      </Dialog>
    </Stack>
  );
}
