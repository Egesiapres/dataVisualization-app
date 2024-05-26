import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SearchIcon from "@mui/icons-material/Search";
import { handleKeyDown } from "../utils/event";
import ClearIcon from "@mui/icons-material/Clear";

export default function PokemonSearch({
  name,
  setName,
  setPokemon,
  status,
  handleSearch,
}) {
  const onKeyDown = e => handleKeyDown(e, handleSearch);

  const handleCancel = () => {
    setName("");
  };

  const handleReset = () => {
    setName("");
    setPokemon(null);
    status.reset();
  };

  return (
    <Grid
      container
      spacing={2}
    >
      <Grid item>
        <TextField
          fullWidth
          label="Pokémon name"
          placeholder="Type a Pokémon name..."
          autoFocus
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={onKeyDown}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleCancel}>
                  <ClearIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ),
          }}
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

      <Grid
        item
        my="auto"
      >
        <Button onClick={handleReset}>Reset</Button>
      </Grid>
    </Grid>
  );
}
