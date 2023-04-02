import Stack from "@mui/material/Stack";
import { useGame } from "../../helpers/GameContext";
import Track from "./Track";
import pillow from "../../images/icons/pillow.svg";

export default function Board() {
  const { game } = useGame();

  return (
    <Stack
      width={1}
      hight={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ flexGrow: 1 }}
    >
      <Track characters={game.characters} />
      <img src={pillow} alt="" />
    </Stack>
  );
}
