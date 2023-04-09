import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import ShareIcon from "@mui/icons-material/Share";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

export default function Share(props) {
  const [open, setOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("none");
  const url = document.location.toString().split("/summery")[0];

  const copy = () => {
    setCopyStatus("copying");
    navigator.clipboard.writeText(url);
    setTimeout(() => {
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("none"), 1000);
    }, 800);
  };

  return (
    <>
      <Button
        variant="contained"
        {...props}
        color="black"
        startIcon={
          <ShareIcon sx={{ marginRight: "-8px", marginLeft: "8px" }} />
        }
        onClick={() => setOpen(true)}
      >
        שתפו חברים
      </Button>
      <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
        {/* <DialogTitle> */}
        <Typography variant="h4">שיתוף</Typography>
        {/* </DialogTitle> */}
        <DialogContent>
          <Stack direction="row" justifyContent="space-evenly">
            <FacebookShareButton url={url}>
              <FacebookIcon size={48} round />
            </FacebookShareButton>
            <TwitterShareButton url={url}>
              <TwitterIcon size={48} round />
            </TwitterShareButton>
            <WhatsappShareButton url={url}>
              <WhatsappIcon size={48} round />
            </WhatsappShareButton>
            <TelegramShareButton url={url}>
              <TelegramIcon size={48} round />
            </TelegramShareButton>
          </Stack>
          <OutlinedInput
            fullWidth
            value={url}
            sx={{
              flexDirection: "row-reverse",
              paddingRight: "1.2rem",
              input: { direction: "ltr" },
            }}
            endAdornment={
              <InputAdornment position="end">
                {copyStatus === "copying" ? (
                  <CircularProgress sx={{ marginRight: "-0.7rem" }} />
                ) : (
                  <IconButton
                    edge="end"
                    sx={{
                      backgroundColor:
                        copyStatus === "copied" ? "#82ef5f" : "#c6c6c6",
                    }}
                    onClick={copy}
                  >
                    {copyStatus === "copied" ? (
                      <DoneIcon />
                    ) : (
                      <ContentCopyIcon />
                    )}
                  </IconButton>
                )}
              </InputAdornment>
            }
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
