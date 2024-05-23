import { Button, Grid, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function PagePersonalArea() {
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Paper
      variant="outlined"
      sx={{ p: 4, maxWidth: 1000 }}
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
        >
          <Typography variant="h3">Hey Sir!</Typography>
        </Grid>

        <Grid
          item
          xs={12}
        >
          <Typography variant="h4">This is your personal area</Typography>
        </Grid>

        <Grid
          item
          xs={12}
        >
          <Button
            variant="contained"
            onClick={handleLogout}
          >
            Log out
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
