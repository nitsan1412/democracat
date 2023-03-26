import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useGame } from "../../helpers/GameContext";
import Rule from "./Rule";
// import cneset1 from "../../images/cneset1.jpeg";
import cneset2 from "../../images/cneset2.jpeg";
import useWindowSize from "../../helpers/windowSize";

export default function RuleChoice() {
  const currentWidth = useWindowSize().width;

  const { game } = useGame();
  const rule = game.nextRule;

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      width={currentWidth > 450 ? 350 : "100vw"}
      sx={{
        padding: rule && "1rem",
        gap: rule && "1rem",
        // height: rule && "27%",
        maxWidth: !rule ? "fit-content" : currentWidth > 450 ? 350 : "100vw",
        height: rule ? "27%" : "auto",
      }}
    >
      {rule ? (
        <Rule rule={rule} />
      ) : (
        <img
          src={cneset2}
          width={currentWidth > 450 ? 350 : "100%"}
          height="auto"
          alt={"הכנסת"}
        />
      )}
    </Stack>
  );
}
