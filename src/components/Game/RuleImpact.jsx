import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { useGame } from "../../helpers/GameContext";
import CharacterImage from "./CharacterImage";

export default function RuleImpact({ rule, inSummary }) {
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
            badgeContent={
              inSummary
                ? `${impact > 0 ? "+" : "-"}${
                    impact > 0 ? impact : impact * -1
                  }`
                : `${impact > 0 ? impact : impact * -1}${
                    impact > 0 ? "+" : "-"
                  }`
            }
            sx={{
              justifyContent: "center",
              ".MuiBadge-badge": {
                padding: 0,
                fontSize: inSummary ? "0.6rem" : "0.75rem",
                width: inSummary ? "11px" : "15px",
                height: inSummary ? "15px" : "15px",
                lineHeight: inSummary ? "11px" : "15px",
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
                  ? inSummary
                    ? { height: "42px", width: "40px" }
                    : { height: "53px", width: "50px" }
                  : inSummary
                  ? { height: "35px", width: "33px" }
                  : { height: "35px", width: "33px" }
              }
            />
          </Badge>
        )
      )}
    </Stack>
  );
}
