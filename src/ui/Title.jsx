import Typography from "@mui/material/Typography";

function Title({ children, variant = "h6", align = "center", ...props  }) {
  return (
    <Typography      
      variant={variant}
      color="primary"
      align={align}
      m={2}
      {...props}
    >
      {children}
    </Typography>
  );
}

export default Title;
