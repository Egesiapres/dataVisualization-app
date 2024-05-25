import { Grid, TextField } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import SearchIcon from "@mui/icons-material/Search";

export default function PokemonSearch({ name, setName, status, handleSearch }) {
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
        <LoadingButton
          loading={status.isLoading}
          variant="contained"
          startIcon={<SearchIcon />}
          onClick={handleSearch}
        >
          Search
        </LoadingButton>
      </Grid>
    </Grid>
  );
}
