import Stack from "@mui/material/Stack";
import Character from "./Character";
import Game from "../../logic/Game";

export default function Track({ characterType, characters }) {
  return (
    <Stack
      width={1}
      height={"78%"}
      sx={{ marginRight: "-1px", position: "relative" }}
    >
      {characters.filter(character => character.location < Game.TRACK_END).map((character, index) =>
        <Character key={index} character={character} />
      )}
    </Stack>
  );
}
