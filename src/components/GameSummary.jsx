import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Rule from "./Game/Rule";
import Character from "./Game/Character";

import { useGame } from "../helpers/GameContext";

export default function StartGameMenu() {
  const { game } = useGame();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      // maxWidth="350px"
      sx={{
        padding: "1rem",
        // gap: "1rem",
        // ".slick-track": { width: "250 !important" },
        ".slick-slide": { padding: "0.5rem 1rem" },
        ".slick-arrow": { zIndex: 2, "&::before": { color: "#000000" } },
        ".slick-prev": { left: "-45px" },
        ".slick-next": { right: "-55px" },
      }}
    >
      <Typography variant="h3">כל הכבוד!</Typography>
      <Typography variant="h5">{game.score} נקודות!</Typography>
      {/* <Typography variant="h5">+</Typography> */}

      <Typography variant="h5">
        {game.bonusScore} בונוס עבור פלורליזם !
      </Typography>
      <Typography variant="h5">
        סך הכל: {game.bonusScore + game.score}
      </Typography>
      {/* <Stack>
        {Object.entries(game.charactersByType).map(
          ([characterType, characters]) => {
            console.log("characterType", characterType);
            console.log("characters", characters);
            // const charactersDoneOfType = characters.filter(
            //   (character) =>
            //     character.location < 100 &&
            //     characterType === character.type.name
            // );
            return (
              <Stack sx={{ flexDirection: "row", gap: 1 }}>
                <Typography variant="h5">{characters.length}</Typography>

                <Character.Image
                  characterType={characterType}
                  sx={{ height: "60px", width: "60px" }}
                />
              </Stack>
            );
          }
        )}
      </Stack> */}
      <Stack
        alignItems="center"
        justifyContent="center"
        maxWidth="250px"
        sx={{
          ".slick-initialized": {
            // width: 250,
            direction: "row",
            justifyContent: "center",
            alignContent: "center",
          },
          ".slick-list": {
            width: 250,
            direction: "column",
            alignContent: "center",
            height: "12rem",
            margin: "1rem -2rem",
          },
          ".css-1qgzj37-MuiStack-root .slick-track": {
            maxWidth: 230,
            height: "13rem",
            transform: "translate3d(0px, 0px, 0px)",
          },
        }}
      >
        <Typography variant="h5">
          {game.chosenRules.length} :חוקים שעברו
        </Typography>
        <Slider slidesToShow={1} slidesToScroll={1}>
          {/* <div>hhh</div>
          <div>hhh</div>
          <div>hhh</div>
          <div>hhh</div> */}

          {game.chosenRules.map((rule) => (
            // <div>hhh</div>
            <Rule rule={rule} noChoice />
          ))}
        </Slider>
      </Stack>

      <Button
        variant="contained"
        fullWidth
        startIcon={
          <ShareIcon sx={{ marginRight: "-8px", marginLeft: "8px" }} />
        }
      >
        Share
      </Button>
      <Button
        variant="contained"
        fullWidth
        startIcon={
          <ShareIcon sx={{ marginRight: "-8px", marginLeft: "8px" }} />
        }
        onClick={() => {}}
      >
        New Game
      </Button>
    </Stack>
  );
}
