import { Route, Routes } from "react-router";
import PageError from "../app/PageError";
import PageEditAccount from "../account/PageAccount";
import DashboardUser from "../layout/dashboard/DashboardUser";
import PagePokemonDashboard from "../pokemon/PagePokemonDashboard";

export default function AuthenticatedRoutes() {
  return (
    <DashboardUser>
      <Routes>
        <Route
          path="/user/dashboard"
          element={<PagePokemonDashboard />}
        />

        <Route
          path="/user/account"
          element={<PageEditAccount />}
        />

        <Route
          path="*"
          element={<PageError targetPage="user/dashboard" />}
        />
      </Routes>
    </DashboardUser>
  );
}
