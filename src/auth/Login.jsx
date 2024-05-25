import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import KeyIcon from "@mui/icons-material/Key";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const { login, setHasAccount } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/user/dashboard");
  };

  return (
    <Paper
      variant="outlined"
      sx={{ p: 4, maxWidth: 500 }}
    >
      <Grid
        container
        spacing={3}
        textAlign="center"
      >
        <Grid
          item
          xs={12}
          my={3}
        >
          <Typography
            variant="h3"
            color="black"
          >
            Welcome Back! 👋
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
        >
          <TextField
            fullWidth
            required
            autoFocus
            label="E-mail Address"
            placeholder="E-mail Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
        >
          <FormControl
            fullWidth
            required
            variant="outlined"
          >
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              startAdornment={
                <InputAdornment position="start">
                  <KeyIcon fontSize="small" />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
          mt={1}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            align="left"
          >
            {"Don't"} have an account?{" "}
            <Link
              to="/register"
              onClick={() => setHasAccount(false)}
            >
              Register
            </Link>
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
        >
          <Button
            fullWidth
            startIcon={<LoginIcon />}
            onClick={handleLogin}
          >
            Log in
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
