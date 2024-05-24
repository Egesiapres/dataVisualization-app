import { Box, Link, Typography } from "@mui/material";

export default function Copyright(props) {
  return (
    <Box {...props}>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
      >
        Made with ❤️ in Spain.
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
      >
        Copyright ©{" "}
        <Link
          color="inherit"
          href="https://github.com/Egesiapres"
        >
          Egesiapres
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}
