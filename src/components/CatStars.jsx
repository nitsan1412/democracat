import * as React from "react";
import Box from "@mui/material/Box";
import fullPinkCat from "../images/icons/fullPinkCat.svg";
import emptyPinkCat from "../images/icons/emptyPinkCat.svg";

export default function CatStars({ gameSummary, ratingLimits }) {
  return (
    <Box>
      {ratingLimits.map((limit) => {
        if (gameSummary.bonusScore + gameSummary.score >= limit)
          return <img src={fullPinkCat} alt="" />;
        else return <img src={emptyPinkCat} alt="" />;
      })}
    </Box>
  );
}
