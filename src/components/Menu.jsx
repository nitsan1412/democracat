import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useGame } from "../helpers/GameContext";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import useWindowSize from "../helpers/windowSize";
import Dialog from "@mui/material/Dialog";

export default function Menu() {
  const { game } = useGame();
  const [showInstructions, setShowInstructions] = useState(false);
  const currentWidth = useWindowSize().width;

  return (
    <AppBar position="static">
      {game.status === "pending" && (
        <Typography
          variant="button"
          sx={{
            fontWeight: "bold",
            position: "absolute",
            top: "0.8rem",
            right:
              currentWidth > 450
                ? "calc(currentWidth-(currentWidth-5%))"
                : "5%",
            marginRight: currentWidth > 450 ? "1rem" : 0,
          }}
          onClick={() => setShowInstructions(!showInstructions)}
        >
          <HelpOutlineIcon />
        </Typography>
      )}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ padding: "0.5rem", height: "3rem" }}
      >
        <Typography variant="button" sx={{ fontWeight: "bold" }}>
          DemocraCat
        </Typography>
      </Stack>
      <Dialog
        open={showInstructions}
        onClose={() => setShowInstructions(false)}
        sx={{ borderRadius: 15 }}
      >
        <Box sx={style} gap={3}>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            {/* {rule.name} */}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            עבר בהצלחה
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h6">
            {/* {rule.info || ""} */}
          </Typography>
        </Box>
      </Dialog>
    </AppBar>
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
