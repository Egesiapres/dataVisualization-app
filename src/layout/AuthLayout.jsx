import { Grid } from "@mui/material";
import Copyright from "../app/Copyright";

export default function PageAuth({ children }) {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item>{children}</Grid>

      <Grid item>
        <Copyright />
      </Grid>
    </Grid>
  );
}
