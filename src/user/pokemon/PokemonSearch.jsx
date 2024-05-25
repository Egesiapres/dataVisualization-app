import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

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

      <Grid item my="auto">
        <Button variant="contained">Cerca</Button>
      </Grid>
    </Grid>
  );
}
