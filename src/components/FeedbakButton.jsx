import { Stack, Typography } from "@mui/material";

import feedback from "../images/icons/feedback.svg";

export default function FeedbackButton() {
  const onClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScMHQ-JwlNL0F9RW7QZEsgzPpPCigf_7y3DQbpceLTDAvcTZg/viewform",
      "_blank"
    );
  };

  return (
    <Stack gap={1} justifyContent="center">
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          fontSize: "1rem",
          textDecoration: "underline",
          fontWeight: 600,
          cursor: "pointer",
          padding: 1,
          letterSpacing: "1px",
        }}
        onClick={onClick}
      >
        <img src={feedback} alt={"משוב"} width="20px" /> נשמח לשמוע את דעתך
      </Typography>
    </Stack>
  );
}
