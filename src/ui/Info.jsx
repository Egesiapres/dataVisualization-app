import { Alert } from "@mui/material";
import FeedbackLayout from "./FeedbackLayout";

export default function Info({ text }) {
  return (
    <FeedbackLayout>
      <Alert severity="info">{text}</Alert>
    </FeedbackLayout>
  );
}
