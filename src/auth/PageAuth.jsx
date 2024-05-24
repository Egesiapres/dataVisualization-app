import { Grid } from "@mui/material";
import Login from "./Login";
import Copyright from "../app/Copyright";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Register } from "./Register";

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
