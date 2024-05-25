import { Grid } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Login from "./Login";
import Register from "./Register";
import Copyright from "../app/Copyright";

export const PageAuth = () => {
  const { hasAccount } = useContext(AuthContext);
  console.log("hasAccount:", hasAccount);
  
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item>
        {hasAccount ? <Login /> : <Register />}
      </Grid>

      <Grid item>
        <Copyright />
      </Grid>
    </Grid>
  );
};
