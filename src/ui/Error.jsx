import { Alert } from "@mui/material";

export default function Error({ error }) {
  // let errorText = "";

  // if (error.response) {
  //   errorText = `${error.response.data.status}: ${error.response?.data?.message}`;
  // }

  return <Alert severity="error">{error.message}</Alert>;
}
