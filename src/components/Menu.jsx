import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Menu() {
  return (
    <AppBar position="static">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ padding: "0.5rem", height: "3rem" }}
      >
        <Typography variant="button" sx={{ fontWeight: "bold" }}>
          democrun
        </Typography>
      </Stack>
    </AppBar>
  );
}
