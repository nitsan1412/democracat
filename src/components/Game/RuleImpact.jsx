import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { useGame } from "../../helpers/GameContext";
import CharacterImage from "./CharacterImage";

export default function RuleImpact({ rule }) {
  const { game } = useGame();
  const impactedCharacterTypes = game.characterTypes
    .filter(
      (characterType) =>
        rule.impact[
          Object.keys(rule.impact).find((key) =>
            characterType.name.includes(key)
          )
        ]
    )
    .map((characterType) => ({
      characterType: characterType.name,
      impact:
        rule.impact[
          Object.keys(rule.impact).find((key) =>
            characterType.name.includes(key)
          )
        ],
    }));
  return (
    <Stack
      width={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {impactedCharacterTypes.map(
        ({ characterType, impact }) =>
          impact && (
            <Badge
              key={characterType}
              badgeContent={RuleImpact.BADGES[impact].content}
              color={RuleImpact.BADGES[impact].color}
              sx={{
                // flex: 1,
                justifyContent: "center",
                ".MuiBadge-badge": {
                  padding: 0,
                  fontSize: "0.75rem",
                  width: "21px",
                  height: "21px",
                  lineHeight: "21px",
                  // top: 10,
                  right: 15,
                },
              }}
            >
              <CharacterImage
                characterType={characterType}
                sx={
                  impactedCharacterTypes.length < 5
                    ? { height: "60px", width: "60px" }
                    : { height: "40px", width: "40px" }
                }
              />
            </Badge>
          )
        // ) : (
        //   <Character.Image
        //     key={characterType}
        //     characterType={characterType}
        //     sx={{ height: "60px", width: "60px" }}
        //   />
        // )
      )}
    </Stack>
  );
}

RuleImpact.BADGES = {
  [-1]: { color: "error", content: "1-" },
  1: { color: "success", content: "1+" },
  2: { color: "success", content: "2+" },
  3: { color: "success", content: "3+" },
  [-2]: { color: "error", content: "2-" },
};
