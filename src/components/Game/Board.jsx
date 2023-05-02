import Stack from "@mui/material/Stack";
import { useGame } from "../../helpers/GameContext";
import Character from "./Character";
import pillow from "../../images/icons/pillow.png";
// import catFinishedGif from "../../images/animations/catFinishedGif.gif";

export default function Board() {
  const { game } = useGame();

  return (
    <Stack
      width={1}
      hight={1}
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ flexGrow: 1, position: "relative" }}
    >
      <div
        className="characters-in-board"
        style={{
          height: "calc(100% - 100px)",
          width: "100%",
          position: "relative",
        }}
      >
        {game.characterManager.charactersInPlay().map((character, index) => (
          <Character key={index} character={character} trackSize={100} />
        ))}
      </div>
      {/* <img src={`url(${catFinishedGif})`} alt="" width="10rem" /> */}
      <img src={pillow} alt="" width="100%" />
      {/* {game.characterManager.catFinishedNow ? (
        <img src={`url(${catFinishedGif})`} alt="" width="10rem" />
      ) : (
        <></>
      )} */}
    </Stack>
  );
}
