import { Container, Grid, Paper } from "@mui/material";
import { getPokemon } from "../api/pokemon";
import { useState } from "react";
import { useStatus } from "../hooks/useStatus";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import PokemonSearch from "./PokemonSearch";
import PokemonInfo from "./PokemonInfo";
import Info from "../ui/Info";

export default function PagePokemonDashboard() {
  const [name, setName] = useState("");

  const [pokemon, setPokemon] = useState(null);

  const status = useStatus();

  const handleSearch = async () => {
    if (name) {
      status.setLoading();

      try {
        const pokemon = await getPokemon(name);

        setPokemon(pokemon);

        status.setSuccess();
      } catch (error) {
        status.setError(error);
      }
    }
  };

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
          container
          justifyContent="center"
        >
          <Paper
            sx={{ p: 2 }}
            variant="outlined"
          >
            <PokemonSearch
              name={name}
              setName={setName}
              setPokemon={setPokemon}
              status={status}
              handleSearch={handleSearch}
            />
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
        >
          {status.isLoading ? (
            <Loading />
          ) : status.error ? (
            <Error error={status.error} />
          ) : pokemon ? (
            <Grid
              container
              justifyContent="center"
            >
              <Grid
                item
                xs={12}
                // md={9}
              >
                <PokemonInfo pokemon={pokemon} />
              </Grid>
            </Grid>
          ) : (
            <Grid
              item
              xs={12}
            >
              <Info text="To get Pokémon details search one by name." />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
