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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function Register() {
  const { setHasAccount } = useContext(AuthContext);

  const [name, setName] = useState("");

  const [surname, setSurname] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleBackToLogin = () => {
    setHasAccount(true);
    navigate("/login");
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
            variant="h4"
            color="black"
          >
            Create your Account 🐱
          </Typography>
        </Grid>

        <Grid
          item
          xs={6}
        >
          <TextField
            fullWidth
            required
            autoFocus
            label="Name"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Grid>

        <Grid
          item
          xs={6}
        >
          <TextField
            fullWidth
            required
            autoFocus
            label="Surname"
            placeholder="Surname"
            value={surname}
            onChange={e => setSurname(e.target.value)}
          />
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
        >
          <Button
            fullWidth
            variant="contained"
            startIcon={<PersonAddIcon />}
            onClick={() => {}}
          >
            Register
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
        >
          <Button
            fullWidth
            startIcon={<ArrowBackIcon />}
            onClick={handleBackToLogin}
          >
            Back to Log in
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
