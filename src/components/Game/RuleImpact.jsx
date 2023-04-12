import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { useGame } from "../../helpers/GameContext";
import CharacterImage from "./CharacterImage";

export default function RuleImpact({ rule, inSummery }) {
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
            badgeContent={
              inSummery
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
                fontSize: inSummery ? "0.6rem" : "0.75rem",
                width: inSummery ? "11px" : "15px",
                height: inSummery ? "15px" : "15px",
                lineHeight: inSummery ? "11px" : "15px",
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
                  ? inSummery
                    ? { height: "42px", width: "40px" }
                    : { height: "53px", width: "50px" }
                  : inSummery
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
