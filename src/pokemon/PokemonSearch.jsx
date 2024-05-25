import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function PokemonSearch() {
  const [name, setName] = useState("");

  return (
    <Grid
      container
      spacing={2}
    >
      <Grid item>
        <TextField
          label="Pokemon name"
          placeholder="Pokemon name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Grid>

      <Grid
        item
        my="auto"
      >
        <Button
          variant="contained"
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
