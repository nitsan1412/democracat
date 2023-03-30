import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InstructionDialog from "./InstructionDialog";
import { useWindowWidth } from "@react-hook/window-size";
import { useGame } from "../helpers/GameContext";

export default function Menu() {
  const { game } = useGame();
  const [showInstructions, setShowInstructions] = useState(false);
  const currentWidth = useWindowWidth();

  return (
    <AppBar position="static">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={game.status === "pending" ? "space-between" : "center"}
        marginX="2rem"
      >
        {game.status === "pending" ? (
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
          marginLeft={game.status === "pending" ? "6rem" : 0}
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
