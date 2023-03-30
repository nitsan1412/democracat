import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";

export default function InstructionDialog(props) {
  return (
    <Dialog
      open={props.showInstructions}
      onClose={() => props.setShowInstructions(false)}
      sx={{ borderRadius: 15 }}
    >
      <Stack sx={style} gap={3}>
        <Typography id="modal-modal-title" variant="h6" component="h6">
          {/* {rule.name} */}
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h6">
          עבר בהצלחה
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h6">
          {/* {rule.info || ""} */}
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
