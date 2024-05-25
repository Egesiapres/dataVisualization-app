import { Route, Routes } from "react-router";
import PageError from "../app/PageError";
import PageAccount from "../layout/dashboard/PageAccount";
import PageDashboard from "../user/PageDashboard";

export default function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route
        path="/user/dashboard"
        element={<PageDashboard />}
      />

      <Route
        path="/user/account"
        element={<PageAccount />}
      />

      <Route
        path="*"
        element={<PageError targetPage="user/dashboard" />}
      />
    </Routes>
  );
}
