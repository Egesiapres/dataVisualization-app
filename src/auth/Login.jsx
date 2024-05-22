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
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from '@mui/icons-material/Key';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";

export const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Paper
      variant="outlined"
      sx={{ p: 4 }}
    >
      <Grid
        container
        spacing={3}
        sx={{ width: 500 }}
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
                  <EmailIcon fontSize="small" />
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
          xs={6}
        >
          <Button
            fullWidth
            variant="contained"
            disabled
            startIcon={<AppRegistrationIcon />}
          >
            Sign Up
          </Button>
        </Grid>

        <Grid
          item
          xs={6}
        >
          <Button
            fullWidth
            // variant="outlined"
            startIcon={<LoginIcon />}
            // TODO: ...
            onClick={() => {}}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
