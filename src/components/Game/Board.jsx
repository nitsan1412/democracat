import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { useGame } from "../../helpers/GameContext";
import Character from "./Character";

export default function Board() {
  const { game } = useGame();

  return (
    <Stack
      width={1}
      hight={1}
      direction="column"
      alignItems="stretch"
      sx={{ flexGrow: 1 }}
    >
      {" "}
      <Stack
        width={1}
        hight={1}
        direction="row"
        alignItems="stretch"
        sx={{ flexGrow: 1 }}
      >
        {Object.entries(game.charactersByGenderlessType).map(
          ([characterType, characters]) => (
            <Track
              key={characterType.name}
              characterType={characterType}
              characters={characters}
            />
          )
        )}
      </Stack>
      <Button variant="contained" fullWidth>
        הגעת ליעד
      </Button>
    </Stack>
  );
}

function Track({ characterType, characters }) {
  return (
    <Box width={1} sx={{ marginRight: "-1px", position: "relative" }}>
      {characters.map((character, index) =>
        character.location < 100 ? (
          <Character key={index} character={character} />
        ) : (
          ""
        )
      )}
    </Box>
  );
}
