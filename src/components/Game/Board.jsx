import Stack from "@mui/material/Stack";
import { useGame } from "../../helpers/GameContext";
import Character from "./Character";
import pillow from "../../images/icons/pillow.svg";

export default function Board() {
  const { game } = useGame();

  return (
    <Stack
      width={1}
      hight={1}
      direction="column"
      alignItems="center"
      justifyContent="flex-end"
      sx={{ flexGrow: 1, position: "relative" }}
    >
      {game.characterManager.charactersInPlay().map((character, index) => (
        <Character key={index} character={character} trackSize={80} />
      ))}
      <img src={pillow} alt="" height="45rem" />
    </Stack>
  );
}
