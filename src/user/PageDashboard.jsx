import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import Dashboard from "../layout/dashboard/Dashboard";

export default function PageDashboard() {
  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return <Dashboard handleLogout={handleLogout} />;
}
