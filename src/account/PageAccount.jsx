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
import EditIcon from "@mui/icons-material/Edit";
import { AuthContext } from "../context/AuthContext";
import { handleKeyDown, handleOnChange } from "../utils/event";
import Success from "../ui/Success";
import Error from "../ui/Error";

export default function PageAccount() {
  const { account } = useContext(AuthContext);

  const [name, setName] = useState(account?.name);

  const [surname, setSurname] = useState(account?.surname);

  const [email, setEmail] = useState(account?.email);

  const [password, setPassword] = useState(account?.password);

  const [showPassword, setShowPassword] = useState(false);

  const [editError, setEditError] = useState(null);

  const [editSuccess, setEditSuccess] = useState(null);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const updatedAccount = {
    name,
    surname,
    email,
    password,
  };

  const handleEditAccount = () => {
    setEditError(null);
    setEditSuccess(null);

    if (updatedAccount !== account) {
      (account.name = name),
        (account.surname = surname),
        (account.email = email),
        (account.password = password);

      setEditSuccess({ message: "Account details successfully updated!" });
    } else {
      setEditError({ message: "Account details are the same as before." });
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      mt={4}
    >
      <Grid item>
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
                Edit your Account 🐱
              </Typography>
            </Grid>

            <Grid
              item
              xs={6}
            >
              <TextField
                fullWidth
                label="Name"
                placeholder="Name"
                value={name}
                onChange={e =>
                  handleOnChange(e, setName, setEditError, setEditSuccess)
                }
                onKeyDown={e => handleKeyDown(e, handleEditAccount)}
              />
            </Grid>

            <Grid
              item
              xs={6}
            >
              <TextField
                fullWidth
                label="Surname"
                placeholder="Surname"
                value={surname}
                onChange={e =>
                  handleOnChange(e, setSurname, setEditError, setEditSuccess)
                }
                onKeyDown={e => handleKeyDown(e, handleEditAccount)}
              />
            </Grid>

            <Grid
              item
              xs={12}
            >
              <TextField
                fullWidth
                label="E-mail Address"
                placeholder="E-mail Address"
                value={email}
                onChange={e =>
                  handleOnChange(e, setEmail, setEditError, setEditSuccess)
                }
                onKeyDown={e => handleKeyDown(e, handleEditAccount)}
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
                  onChange={e =>
                    handleOnChange(e, setPassword, setEditError, setEditSuccess)
                  }
                  onKeyDown={e => handleKeyDown(e, handleEditAccount)}
                />
              </FormControl>
            </Grid>

            <Grid
              item
              xs={12}
            >
              {editSuccess ? (
                <Success success={editSuccess} />
              ) : editError ? (
                <Error error={editError} />
              ) : null}
            </Grid>

            <Grid
              item
              xs={12}
            >
              <Button
                fullWidth
                variant="contained"
                startIcon={<EditIcon />}
                onClick={handleEditAccount}
              >
                Edit Account Details
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
