import { useState } from "react";
import "../App.css";
import AuthenticatedRoutes from "../routes/AuthenticatedRoutes";
import UnauthenticatedRoutes from "../routes/UnauthenticatedRoutes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
}

export default App;
