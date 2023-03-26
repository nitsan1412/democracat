import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import ReplayIcon from "@mui/icons-material/Replay";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Rule from "./Game/Rule";
import Character from "./Game/Character";

import { useGame } from "../helpers/GameContext";

export default function StartGameMenu() {
  const { game, newGame } = useGame();

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
        ".slick-arrow": { zIndex: 72, "&::before": { color: "#000000" } },
        ".slick-prev": { left: "-45px" },
        ".slick-next": { right: "-55px" },
      }}
    >
      <Typography variant="h3">כל הכבוד!</Typography>
      <Typography variant="h5">{game.score} נקודות!</Typography>
      {/* <Typography variant="h5">+</Typography> */}

      <Typography variant="h5">
        {game.bonusScore} בונוס עבור פלורליזם!
      </Typography>
      <Typography variant="h5">
        סך הכל: {game.bonusScore + game.score}
      </Typography>
      {/* working on styling */}

      <Grid
        sx={{ maxWidth: "350px", marginTop: 2 }}
        container
        justifyContent="center"
        alignItems="center"
        spacing={4}
        // xs={8} sm={} md={} lg={} xl={}
      >
        {Object.entries(game.charactersByType).map(
          ([characterType, characters]) => {
            const numberOfCharactersDoneOfType = characters.filter(
              (character) =>
                character.location > 100 &&
                characterType === character.type.name
            ).length;
            if (numberOfCharactersDoneOfType > 0)
              return (
                <Stack sx={{ flexDirection: "row", maxWidth: 150 }}>
                  <Typography variant="h5" sx={{ marginTop: 1.5 }}>
                    {numberOfCharactersDoneOfType}
                  </Typography>
                  <Character.Image
                    characterType={characterType}
                    sx={{ height: "60px", width: "60px" }}
                  />
                </Stack>
              );
            else return "";
          }
        )}
      </Grid>
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
        <Slider
          slidesToShow={1}
          slidesToScroll={1}
          dots={true}
          swipeToSlide={true}
        >
          {game.chosenRules.map((rule) => (
            <Rule rule={rule} noChoice />
          ))}
        </Slider>
      </Stack>

      <Button
        variant="contained"
        fullWidth
        sx={{ marginBottom: "8px" }}
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
          <ReplayIcon sx={{ marginRight: "-8px", marginLeft: "8px" }} />
        }
        onClick={() => newGame()}
      >
        New Game
      </Button>
    </Stack>
  );
}
