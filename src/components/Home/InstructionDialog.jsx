import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import CharacterImage from "./Game/CharacterImage";
export default function InstructionDialog(props) {
  return (
    <Dialog
      open={props.showInstructions}
      onClose={() => props.setShowInstructions(false)}
      sx={{ borderRadius: 15, margin: "14px" }}
    >
      <Stack
        sx={style}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        gap={1}
      >
        <Typography
          id="modal-modal-title"
          variant="h3"
          component="h6"
          color="#1A73E8"
          fontWeight={700}
        >
          ברכות{" "}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h6">
          נבחרת לשלוט במדינת החתולים{" "}
        </Typography>
        <Typography id="modal-modal-title" variant="p" component="p">
          אתה מחליט איזה אזרח יגיע לחיים הטובים בשנת 2050{" "}
        </Typography>
        <Typography id="modal-modal-title" variant="p" component="p">
          לפניך ארבע אוכלוסיות הרצות לקו הסיום:{" "}
        </Typography>
        <Stack direction="row" maxWidth="80vw">
          <Typography id="modal-modal-title" variant="span" component="span">
            חילונים
          </Typography>
          <CharacterImage
            key="secular-man"
            characterType="secular-man"
            sx={characterStyles}
          />
          <Typography id="modal-modal-title" variant="span" component="span">
            דתיים-ציוניים
          </Typography>
          <CharacterImage
            key="religious-man"
            characterType="religious-man"
            sx={characterStyles}
          />
        </Stack>

        <Stack direction="row" maxWidth="80vw">
          <Typography id="modal-modal-title" variant="span" component="span">
            חרדים
          </Typography>
          <CharacterImage
            key="orthodox-man"
            characterType="orthodox-man"
            sx={characterStyles}
          />
          <Typography id="modal-modal-title" variant="span" component="span">
            ערבים{" "}
          </Typography>
          <CharacterImage
            key="arab-man"
            characterType="arab-man"
            sx={characterStyles}
          />
        </Stack>
        <Typography id="modal-modal-title" variant="p" component="p">
          כל קבוצה מורכבת מנקבות, זכרים, ובעלי מגדר אחר:
        </Typography>
        <Stack direction="row" maxWidth="80vw">
          <Typography id="modal-modal-title" variant="span" component="span">
            זכר
          </Typography>
          <CharacterImage
            key="secular-man"
            characterType="secular-man"
            sx={characterStyles}
          />
          <Typography id="modal-modal-title" variant="span" component="span">
            נקבה
          </Typography>
          <CharacterImage
            key="secular-woman"
            characterType="secular-woman"
            sx={characterStyles}
          />
          <Typography id="modal-modal-title" variant="span" component="span">
            להט"ב
          </Typography>
          <CharacterImage
            key="secular-woman"
            characterType="secular-woman"
            sx={characterStyles}
          />
        </Stack>
        <Typography id="modal-modal-title" variant="span" component="span">
          בעזרת אישור או דחייה של חוקים תוכל לזרז אוכלוסיות מסוימות ולעכב אחרות:
        </Typography>
        <Stack
          width={1}
          direction="row-reverse"
          justifyContent="space-evenly"
          sx={{ ".MuiStack-root": { height: "4.5rem !important" } }}
        >
          <Button
            variant="outlined"
            size="small"
            color="success"
            startIcon={
              <ThumbUpOffAltIcon
                sx={{ marginRight: "-8px", marginLeft: "8px" }}
              />
            }
          >
            אישור
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="error"
            startIcon={
              <ThumbDownOffAltIcon
                sx={{ marginRight: "-8px", marginLeft: "8px" }}
              />
            }
          >
            דחייה
          </Button>
        </Stack>
        <Typography id="modal-modal-title" variant="span" component="span">
          מטרת המשחק היא להגיע עם המספר הרב ביותר של חתולים לקו הסיום. על כל
          חתול שיגיע לקו הסיום תקבלו נקודה.{" "}
        </Typography>
        <Typography id="modal-modal-title" variant="span" component="span">
          אך שים לב, יש בונוס משמעותי על המגוון של האוכלוסיה שמגיעה לקו הסיום.
          ככל שהאוכלוסיה שמגיעה לקו הסיום היא מגוונת יותר מבחינה מגזרית ומגדרית,
          כך הבונוס שתקבלו יהיה גבוה יותר.
        </Typography>
      </Stack>
    </Dialog>
  );
}
const style = {
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};
const characterStyles = {
  width: 50,
  height: 50,
};
