import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Copyright from "../../app/Copyright";
import DashboardAppBar from "./DashboardAppBar";
import DashboardDrawer from "./DashboardDrawer";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const dashboardProps = {
    open: open,
    toggleDrawer: toggleDrawer,
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <DashboardAppBar {...dashboardProps} />

      <DashboardDrawer {...dashboardProps} />

      <Box
        component="main"
        sx={{
          backgroundColor: theme =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />

        {children}

        {/* <Copyright sx={{ pt: 4 }} /> */}
      </Box>
    </Box>
  );
}
