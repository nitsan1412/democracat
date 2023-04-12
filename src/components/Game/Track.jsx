import Stack from "@mui/material/Stack";
import Character from "./Character";

export default function Track({ characters }) {
  return (
    <Stack
      width={1}
      height={"78%"}
      sx={{ marginRight: "-1px", position: "relative" }}
    >
      {characters.map((character, index) => (
        <Character key={index} character={character} />
      ))}
    </Stack>
  );
}
