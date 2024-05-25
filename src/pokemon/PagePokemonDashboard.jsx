import { Container, Grid, Paper } from "@mui/material";
import PokemonSearch from "./PokemonSearch";
import PokemonInfo from "./PokemonInfo";
import { getPokemon } from "../api/pokemon";
import { useState } from "react";
import { useStatus } from "../hooks/useStatus";
import { useApi } from "../hooks/useApi";
import Loading from "../ui/Loading";
import Error from "../ui/Error";

export default function PagePokemonDashboard() {
  const { data: pokemonList, isLoading, error } = useApi(() => getPokemon(""));

  const [name, setName] = useState("");

  const [pokemon, setPokemon] = useState(null);

  const status = useStatus();

  const handleSearch = async () => {
    try {
      status.setLoading();

      const response = await getPokemon(name);

      setPokemon(response);

      status.setSuccess();
    } catch (error) {
      status.setError(error);
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
        >
          <Paper
            sx={{ p: 2 }}
            variant="outlined"
          >
            <PokemonSearch
              name={name}
              setName={setName}
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
            <Paper
              sx={{ p: 2, display: "flex", flexDirection: "column" }}
              variant="outlined"
            >
              <PokemonInfo />
            </Paper>
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
}
