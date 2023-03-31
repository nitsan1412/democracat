import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { useGame } from "../../helpers/GameContext";
import CharacterImage from "./CharacterImage";

export default function RuleImpact({ rule }) {
  const { game } = useGame();
  const impactedCharacterTypes = game.characterTypes
    .map((characterType) => ({
      characterType: characterType.name,
      impact:
        rule.impact[
          Object.keys(rule.impact).find((key) =>
            characterType.name.includes(key)
          )
        ],
    }))
    .filter((item) => Boolean(item.impact));
  return (
    <Stack
      width={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {impactedCharacterTypes.map(({ characterType, impact }) =>
        !impact ? (
          ""
        ) : (
          <Badge
            key={characterType}
            badgeContent={`${impact > 0 ? impact : impact * -1}${
              impact > 0 ? "+" : "-"
            }`}
            color={impact > 0 ? "success" : "error"}
            sx={{
              justifyContent: "center",
              ".MuiBadge-badge": {
                padding: 0,
                fontSize: "0.75rem",
                width: "21px",
                height: "21px",
                lineHeight: "21px",
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
      )}
    </Stack>
  );
}
