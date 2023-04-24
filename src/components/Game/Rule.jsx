import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RuleImpact from "./RuleImpact";

export default function Rule({ rule, showImpact, overTitle, sx = {} }) {
  return (
    <Stack
      sx={{
        border: "none",
        padding: "1rem",
        width: "100%",
        height: 1,
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: "25px",
        background: "white",
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.4)",
        ...sx,
      }}
    >
      <Stack
        gap={1}
        width={1}
        height={1}
        flexDirection="column"
        alignItems="center"
        alignSelf="center"
        justifyContent="center"
      >
        {!overTitle ? (
          ""
        ) : (
          <Typography
            color="primary"
            variant="body1"
            sx={{ fontWeight: 600, textAlign: "center" }}
          >
            {overTitle}
          </Typography>
        )}
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          {rule.name}
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          {rule.initialInfo}
        </Typography>
        {showImpact ? <RuleImpact rule={rule} /> : <></>}
      </Stack>
    </Stack>
  );
}
