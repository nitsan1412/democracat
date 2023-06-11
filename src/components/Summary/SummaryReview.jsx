import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import { useGame } from "../../helpers/GameContext";
import CharacterImage from "../Game/CharacterImage";
import Game from "../../logic/Game";
import { useNavigate } from "../../helpers/SmartNavigate";
import sadCat from "../../images/icons/sadCat.png";
export default function SummaryReview() {
  const { game, start } = useGame();
  const navigate = useNavigate();

  return (
    <Stack alignItems="center">
      {game.characterManager.charactersDone().length === 0 ? (
        <Stack
          sx={{ maxWidth: "350px", marginTop: 2 }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          >
            החתולים שאספת{" "}
          </Typography>
          <img src={sadCat} alt="sad-cat" width="50%" />
        </Stack>
      ) : (
        ""
      )}
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
          {game.characterManager.charactersDone().length === 0
            ? "נראה שלא הצלחת לאסוף חתולים"
            : game.gameSummary.endGameText.firstLine}
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
          {game.characterManager.charactersDone().length === 0
            ? "מומלץ לקרוא את הוראות המשחק ולשחק שוב"
            : game.gameSummary.endGameText.secondLine}
        </Typography>
        <Typography
          variant="body1"
          color="primary"
          sx={{
            textAlign: "center",
            flex: 5,
            fontSize: "1rem",
            fontWeight: 700,
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => {
            start();
            navigate("/regame", true);
          }}
        >
          רוצה לשחק שוב?
        </Typography>
      </Stack>
      {game.characterManager.charactersDone().length === 0 ? (
        ""
      ) : (
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
              החתולים שאספת{" "}
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
            {Object.entries(game.characterManager.charactersByType).map(
              ([characterType, characters], index) => {
                const numberOfCharactersDoneOfType = characters.filter(
                  (character) =>
                    character.location > Game.TRACK_END &&
                    characterType === character.type.name
                ).length;
                // if (numberOfCharactersDoneOfType <= 0) return "";
                // else
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
                      badgeContent={numberOfCharactersDoneOfType || "0"}
                      sx={{
                        justifyContent: "center",
                        ".MuiBadge-badge": {
                          padding: 0,
                          fontSize: "0.7rem",
                          width: "1.7rem",
                          height: "1.7rem",
                          borderRadius: "25px",
                          lineHeight: "21px",
                          right: 15,
                          backgroundColor: "#FFFFFF",
                          color: "#303030",
                          border: " 1px solid #303030",
                        },
                      }}
                    />

                    <CharacterImage
                      characterType={characterType}
                      sx={{ height: "53px", width: "50px" }}
                    />
                  </Stack>
                );
              }
            )}
          </Grid>
        </Stack>
      )}
    </Stack>
  );
}
