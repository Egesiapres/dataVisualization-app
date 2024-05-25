import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router";

export default function ListItems() {
  const navigate = useNavigate()

  const handleDashboard = () => {
    navigate("/user/dashboard");
  }
  
  return (
    <ListItemButton onClick={handleDashboard}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      
      <ListItemText primary="Dashboard" />
    </ListItemButton>
  );
}
