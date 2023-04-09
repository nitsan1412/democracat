import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { useGame } from "../../helpers/GameContext";
import CharacterImage from "../Game/CharacterImage";
import Game from "../../logic/Game";
export default function SummeryReview() {
  const { game } = useGame();

  return (
    <Stack alignItems="center">
      <Stack
        gap={1}
        height={1}
        flexDirection="column"
        alignItems="center"
        alignSelf="center"
        justifyContent="center"
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            flex: 5,
            fontSize: "0.9rem",
            fontWeight: 600,
          }}
        >
          {game.gameSummery.endGameText.firstLine}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            flex: 5,
            fontSize: "0.9rem",
            fontWeight: 600,
          }}
        >
          {game.gameSummery.endGameText.secondLine}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            flex: 5,
            fontSize: "1rem",
            fontWeight: 700,
          }}
        >
          רוצה לשחק שוב?
        </Typography>
      </Stack>
      <Stack
        sx={{ maxWidth: "350px", marginTop: 2 }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Stack
          sx={{ maxWidth: "350px", marginTop: 2 }}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "0.9rem",
              fontWeight: 400,
            }}
          >
            החתולים שאספתם{" "}
          </Typography>
        </Stack>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          {Object.entries(game.charactersByType).map(
            ([characterType, characters], index) => {
              const numberOfCharactersDoneOfType = characters.filter(
                (character) =>
                  character.location > Game.TRACK_END &&
                  characterType === character.type.name
              ).length;
              if (numberOfCharactersDoneOfType <= 0) return "";
              else
                return (
                  <Stack
                    sx={{
                      flexDirection: "row",
                      width: 70,
                      marginBottom: 2,
                      justifyContent: "center",
                    }}
                    key={index}
                  >
                    <Badge
                      key={characterType}
                      badgeContent={`${numberOfCharactersDoneOfType}+`}
                      sx={{
                        justifyContent: "center",
                        ".MuiBadge-badge": {
                          padding: 0,
                          fontSize: "0.75rem",
                          width: "21px",
                          height: "21px",
                          lineHeight: "21px",
                          right: 15,
                          backgroundColor: "#79C300",
                          color: "#FFFFFF",
                        },
                      }}
                    />

                    <CharacterImage
                      characterType={characterType}
                      sx={{ height: "60px", width: "60px" }}
                    />
                  </Stack>
                );
            }
          )}
        </Grid>
      </Stack>
    </Stack>
  );
}
