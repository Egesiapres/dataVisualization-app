import { Alert } from "@mui/material";

export default function Info({ text }) {
  return <Alert severity="info">{text}</Alert>;
}
