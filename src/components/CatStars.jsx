import * as React from "react";
import Stack from "@mui/material/Stack";
import fullCat from "../images/icons/full-cat.png";
import emptyCat from "../images/icons/empty-cat.png";
import Game from "../logic/Game";
export default function CatStars({ gameSummary }) {
  return (
    <Stack flexDirection="row" width="90%">
      {Game.RATING_LIMITS.map((limit) => {
        if (gameSummary.bonusScore + gameSummary.score >= limit)
          return <img src={fullCat} alt="" width="40px" />;
        else return <img src={emptyCat} alt="" width="40px" />;
      })}
    </Stack>
  );
}
