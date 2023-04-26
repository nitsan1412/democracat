import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { useGame } from "../../helpers/GameContext";
import CharacterImage from "./CharacterImage";
import Equality from "../../images/icons/equality.png";
import Muted from "../../images/icons/muted.png";

export default function RuleImpact({ rule }) {
  const { game } = useGame();
  const impactedCharacterTypes = game.characterManager.characterTypes
    .map((characterType) => ({
      characterType: characterType.name,
      impact:
        rule.impact[
          Object.keys(rule.impact).find(
            (key) => key === "all" || characterType.name.includes(key)
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
      marginTop={2}
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
                right: 15,
                backgroundColor: impact > 0 ? "primary" : "secondary",
                color: "#FFFFFF",
              },
            }}
          >
            <CharacterImage
              characterType={characterType}
              sx={
                impactedCharacterTypes.length < 5
                  ? {
                      height: "42px",
                      width: "40px",
                      minHeight: "0rem !important",
                    }
                  : {
                      height: "41px",
                      width: "38px",
                      minHeight: "0rem !important",
                    }
              }
            />
          </Badge>
        )
      )}
      {rule.icon ? (
        <div
          direction="row"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <img src={ICONS[rule.icon]} alt="rule-icon" height="80px" />
        </div>
      ) : (
        ""
      )}
      <div
        direction="row"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h6"
          sx={{
            fontSize: "0.9rem",
            fontWeight: 600,
            justifyContent: "center",
          }}
        >
          {rule.summaryInfo || ""}
        </Typography>
      </div>
    </Stack>
  );
}

export const ICONS = {
  equality: Equality,
  reset: Equality,
  muted: Muted,
};
