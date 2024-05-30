import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/dataVisualization-app/">
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
);
