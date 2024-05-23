import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { formatFromPath } from "../utils/Text";

// eslint-disable-next-line react/prop-types
export default function PageError({ targetPage }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${targetPage}`);
  };

  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        item
        xs={12}
      >
        <Typography
          variant="h1"
          color="black"
        >
          Oops! 😿
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
      >
        <Typography
          variant="h3"
          color="black"
        >
          404
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
      >
        <Typography
          variant="h5"
          color="black"
        >
          Page not found
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        mt={2}
      >
        <Button
          variant="contained"
          onClick={handleClick}
        >
          Return to {formatFromPath(targetPage)}
        </Button>
      </Grid>
    </Grid>
  );
}
