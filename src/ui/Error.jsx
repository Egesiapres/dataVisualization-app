import { Alert } from "@mui/material";
import FeedbackLayout from "./FeedbackLayout";

export default function Error({ error }) {
  return (
    <FeedbackLayout>
      <Alert severity="error">{error.message}</Alert>
    </FeedbackLayout>
  );
}
