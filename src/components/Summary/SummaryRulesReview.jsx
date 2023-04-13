import Stack from "@mui/material/Stack";
import Slider from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useGame } from "../../helpers/GameContext";
import Rule from "../Game/Rule";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SummaryRulesReview() {
  const { game } = useGame();

  if (game.ruleManager.chosenRules.length === 0)  return ''

  const PrevArrow = ({ className, style, onClick }) => (
    <div
      style={{
        background: "#474747",
        borderRadius: "100%",
        width: 35,
        height: 35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "-1rem"
      }}
      {...{ className, onClick }}
    >
      <ArrowBackIcon sx={{ color: "white" }} />
    </div>
  );

  const NextArrow = ({ className, style, onClick }) => (
    <div
      style={{
        background: "#474747",
        borderRadius: "100%",
        width: 35,
        height: 35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "-1rem"
      }}
      {...{ className, onClick }}
    >
      <ArrowForwardIcon sx={{ color: "white" }} />
    </div>
  );

  return (
    <Stack
      sx={{
        width: "100%",
        ".slick-list": {
          width: "calc(100% + 2rem)",
          margin: "1.5rem 0",
        },
        ".slick-slide": {
          padding: "0.5rem"
        },
        ".slick-dots": {
          bottom: 0,
        },
        ".slick-prev": {
          left: 0,
          zIndex: 1,
          "::before": { content: "unset" },
        },
        ".slick-next": {
          right: 0,
          zIndex: 1,
          "::before": { content: "unset" },
        },
      }}
    >
      <Slider
        slidesToShow={1}
        slidesToScroll={1}
        dots
        swipeToSlide
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
      >
        {game.ruleManager.chosenRules.map((rule, ruleIndex) => (
          <Rule
            key={ruleIndex}
            rule={rule}
            showImpact
            overTitle={`${ruleIndex+1}/${game.ruleManager.chosenRules.length} חוקים שעברו`}
            sx={{
              width: "calc(100% - 2rem)"
            }}
          />
        ))}
      </Slider>
    </Stack>
  );
}
