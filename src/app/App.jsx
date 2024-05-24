import "../App.css";
import { useContext } from "react";
import AuthenticatedRoutes from "../routes/AuthenticatedRoutes";
import UnauthenticatedRoutes from "../routes/UnauthenticatedRoutes";
import { AuthContext } from "../context/AuthContext";

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

export default App;
