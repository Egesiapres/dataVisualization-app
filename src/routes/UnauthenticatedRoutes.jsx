import { Navigate, Route, Routes } from "react-router";
import PageError from "../app/PageError";
import PageLogin from "../auth/login/PageLogin";
import PageRegister from "../auth/register/PageRegister";

export default function UnauthenticatedRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={<PageLogin />}
      />

      <Route
        path="/register"
        element={<PageRegister />}
      />

      <Route
        path="/"
        element={<Navigate to="/login" />}
      />

      <Route
        path="*"
        element={<PageError targetPage="login" />}
      />
    </Routes>
  );
}
