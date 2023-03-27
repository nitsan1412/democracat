import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useGame } from "../../helpers/GameContext";
import Character from "./Character";
import useWindowSize from "../../helpers/windowSize";
import Game from "../../logic/Game";

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
      {" "}
      <Stack
        width={1}
        hight="70%"
        // border="black solid 3px"
        direction="row"
        alignItems="stretch"
        sx={{ flexGrow: 1 }}
      >
        {Object.entries(game.charactersByGenderlessType).map(
          ([characterType, characters], index) => (
            <Track
              key={index}
              characterType={characterType}
              characters={characters}
            />
          )
        )}
      </Stack>
      <Button
        variant="contained"
        fullWidth
        sx={{
          // marginBottom: "1rem",
          // position: "absolute"
          marginBottom: "13%",
          width: useWindowSize().width > 450 ? 350 : "100%",
        }}
      >
        הגעת ליעד
      </Button>
    </Stack>
  );
}

function Track({ characterType, characters }) {
  return (
    <Box
      width={1}
      height={"78%"}
      sx={{ marginRight: "-1px", position: "relative" }}
    >
      {characters.map((character, index) =>
        character.location < Game.TRACK_END ? (
          <Character key={index} character={character} />
        ) : (
          ""
        )
      )}
    </Box>
  );
}
