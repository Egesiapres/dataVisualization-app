import { Route, Routes } from "react-router-dom";
import { PageAuth } from "../auth/PageAuth";

// Routing to AuthenticatedRoutes ???
export default function UnauthenticatedRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<PageAuth />}
      />
    </Routes>
  );
}
