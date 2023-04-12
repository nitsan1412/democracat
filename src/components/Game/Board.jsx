import Stack from "@mui/material/Stack";
import { useGame } from "../../helpers/GameContext";
import Track from "./Track";

export default function Board() {
  const { game } = useGame();

  return (
    <Stack
      width={1}
      hight={1}
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      sx={{ flexGrow: 1 }}
    >
      <Track characters={game.characterManager.charactersInPlay()} />
    </Stack>
  );
}
