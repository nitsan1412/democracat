import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { useGame } from "../../helpers/GameContext";
import CharacterImage from "./CharacterImage";

export default function RuleImpact({ rule }) {
  const { game } = useGame();
  const impactedCharacterTypes = game.characterManager.characterTypes
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
      gap={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      minHeight="100%"
    >
      {impactedCharacterTypes.map(({ characterType, impact }) =>
        !impact ? (
          ""
        ) : (
          <Badge
            key={characterType}
            badgeContent={`${impact > 0 ? "+" : "-"}${
              impact > 0 ? impact : impact * -1
            }`}
            sx={{
              justifyContent: "center",
              ".MuiBadge-badge": {
                padding: 0,
                fontSize: "0.6rem",
                width: "11px",
                height: "15px",
                // lineHeight: "11px",
                right: 15,
                backgroundColor: impact > 0 ? "#79C300" : "#FC68B4",
                color: "#FFFFFF",
              },
            }}
          >
            <CharacterImage
              characterType={characterType}
              sx={
                impactedCharacterTypes.length < 5
                  ? { height: "42px", width: "40px" }
                  : { height: "35px", width: "33px" }
              }
            />
          </Badge>
        )
      )}
    </Stack>
  );
}
