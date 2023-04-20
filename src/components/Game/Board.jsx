import Stack from "@mui/material/Stack";
import { useGame } from "../../helpers/GameContext";
import Character from "./Character";
import pillow from "../../images/icons/pillow.svg";
import catFinishedGif from "../../images/animations/catFinishedGif.gif";

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
      <img src={`url(${catFinishedGif})`} alt="" width="10rem" />
      <div>
        <img src={pillow} alt="" width="100%" />
      </div>
      {game.characterManager.catFinishedNow ? (
        <img src={`url(${catFinishedGif})`} alt="" width="10rem" />
      ) : (
        <></>
      )}
    </Stack>
  );
}
