import { Container, Grid, Paper } from "@mui/material";
import PokemonSearch from "./pokemon/PokemonSearch";
import PokemonInfo from "./pokemon/PokemonInfo";

export default function DashboardContent() {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 4, mb: 4 }}
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}          
        >
          <Paper
            sx={{ p: 2 }}
            variant="outlined"
          >
            <PokemonSearch />
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
        >
          <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column" }}
            variant="outlined"
          >
            <PokemonInfo />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
