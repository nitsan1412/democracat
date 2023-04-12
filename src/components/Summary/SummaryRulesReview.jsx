import Stack from "@mui/material/Stack";
import Slider from "react-slick";
import Typography from "@mui/material/Typography";
import { useGame } from "../../helpers/GameContext";
import Rule from "../Game/Rule";

export default function SummaryRulesReview() {
  const { game } = useGame();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      maxWidth="250px"
      sx={{
        ".slick-initialized": {
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
        ".slick-dots": {
          bottom: 0,
        },
      }}
    >
      <Typography variant="h5">
        {game.ruleManager.chosenRules.length} :חוקים שעברו
      </Typography>
      <Slider
        slidesToShow={1}
        slidesToScroll={1}
        dots={true}
        swipeToSlide={true}
      >
        {game.ruleManager.chosenRules.map((rule, ruleIndex) => (
          <Rule key={ruleIndex} rule={rule} inSummary />
        ))}
      </Slider>
    </Stack>
  );
}
