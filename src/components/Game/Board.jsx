import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useWindowWidth } from "@react-hook/window-size";
import { useGame } from "../../helpers/GameContext";
import Track from "./Track";

export default function Board() {
  const { game } = useGame();
  const currentWidth = useWindowWidth();

  return (
    <Stack
      width={1}
      hight={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ flexGrow: 1 }}
    >
      <Stack
        width={1}
        hight="70%"
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
          marginBottom: "13%",
          width: currentWidth > 450 ? 350 : "100%",
        }}
      >
        הגעת ליעד
      </Button>
    </Stack>
  );
}
