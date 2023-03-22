import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { useGame } from "../../helpers/GameContext";
import Character from "./Character";
import { playSound } from "../../helpers/Sounds";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";

export default function Rule({ rule, noChoice }) {
  const [showRuleInfo, setShowRuleInfo] = useState(false);
  return (
    <Paper
      elevation={2}
      sx={{ padding: "0.5rem", width: "20rem", position: "absolute", top: 60 }}
    >
      <Stack gap={1} height={1}>
        <Stack flexDirection="row">
          <InfoTwoToneIcon
            sx={{ color: "purple", flex: 1 }}
            onClick={() => setShowRuleInfo(!showRuleInfo)}
          />
          <Typography
            variant="body1"
            sx={{ textAlign: "center", flex: 5, fontSize: "1.2rem" }}
          >
            {rule.name}
          </Typography>
        </Stack>

        {showRuleInfo ? (
          <Typography
            variant="body2"
            sx={{ textAlign: "center", flex: 1, fontSize: "0.9rem" }}
          >
            {rule.info}
          </Typography>
        ) : (
          <></>
        )}
        <RuleImpact rule={rule} />
        {noChoice ? "" : <RuleChoice rule={rule} />}
      </Stack>
    </Paper>
  );
}

function RuleImpact({ rule }) {
  const { game } = useGame();
  const impactedCharacterTypes = game.characterTypes
    .filter(
      (characterType) =>
        rule.impact[
          Object.keys(rule.impact).find((key) =>
            characterType.name.includes(key)
          )
        ]
    )
    .map((characterType) => ({
      characterType: characterType.name,
      impact:
        rule.impact[
          Object.keys(rule.impact).find((key) =>
            characterType.name.includes(key)
          )
        ],
    }));
  return (
    <Stack width={1} direction="row" justifyContent="center" gap={1}>
      {impactedCharacterTypes.map(({ characterType, impact }) =>
        impact ? (
          <Badge
            key={characterType}
            badgeContent={RuleImpact.BADGES[impact].content}
            color={RuleImpact.BADGES[impact].color}
            sx={{
              ".MuiBadge-badge": {
                padding: 0,
                fontSize: "0.5rem",
                minWidth: "11px",
                height: "11px",
                lineHeight: "11px",
              },
            }}
          >
            <Character.Image
              characterType={characterType}
              sx={{ height: "30px", width: "30px" }}
            />
          </Badge>
        ) : (
          <Character.Image
            key={characterType}
            characterType={characterType}
            sx={{ height: "30px", width: "30px" }}
          />
        )
      )}
    </Stack>
  );
}

RuleImpact.BADGES = {
  [-1]: { color: "error", content: "-" },
  1: { color: "success", content: "+" },
  2: { color: "success", content: "+" },
  3: { color: "success", content: "+" },
  [-2]: { color: "error", content: "-" },
};

function RuleChoice({ rule }) {
  const { game, pauseGame, resumeGame } = useGame();
  const [openModal, setOpenModal] = useState(false);
  return (
    <Stack width={1} direction="row-reverse" justifyContent="space-evenly">
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
          pauseGame();
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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            החוק: {rule.name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            עבר בהצלחה
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="subtitle2"
            component="subtitle2"
          >
            {rule.info || ""}
          </Typography>
          <Button
            // sx={buttonStyle}
            variant="outlined"
            onClick={() => {
              resumeGame();
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
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
// const buttonStyle = {
//   borderRadius: 25,
//   border: black
// };
