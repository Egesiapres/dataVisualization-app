import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter basename="/">
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </HashRouter>
);
