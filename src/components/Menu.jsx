import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InstructionDialog from "./Home/InstructionDialog";
import { useWindowWidth } from "@react-hook/window-size";
import { useGame } from "../helpers/GameContext";

export default function Menu() {
  const { game } = useGame();
  const [showInstructions, setShowInstructions] = useState(false);
  const isPending = game.status === "pending";

  const currentWidth = useWindowWidth();

  return (
    <AppBar position="static" sx={{ "+*": { height: "calc(100vh - 48px)" } }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={isPending ? "space-between" : "center"}
        marginX="2rem"
      >
        {isPending ? (
          <Stack justifyContent="flex-start" marginTop="0.5rem">
            <Typography
              variant="button"
              sx={{
                fontWeight: "bold",
                alignItems: "center",
                marginRight: currentWidth > 450 ? "1rem" : 0,
              }}
              onClick={() => setShowInstructions(!showInstructions)}
            >
              <HelpOutlineIcon />
            </Typography>
          </Stack>
        ) : (
          <></>
        )}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          marginLeft={isPending ? "6rem" : 0}
        >
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ padding: "0.5rem", height: "3rem" }}
          >
            <Typography variant="button" sx={{ fontWeight: "bold" }}>
              DemocraCat
            </Typography>
          </Stack>
        </Stack>
        <InstructionDialog
          setShowInstructions={setShowInstructions}
          showInstructions={showInstructions}
        />
      </Stack>
    </AppBar>
  );
}
