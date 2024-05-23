import { Route, Routes } from "react-router";
import { UserRoutes } from "./UserRoutes";

export default function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route
        path="/user"
        element={<UserRoutes />}
      />
    </Routes>
  );
}
