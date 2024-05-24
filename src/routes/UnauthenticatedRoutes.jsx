import { Navigate, Route, Routes } from "react-router";
import { PageAuth } from "../auth/PageAuth";
import PageError from "../app/PageError";

export default function UnauthenticatedRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={<PageAuth />}
      />

      <Route
        path="/register"
        element={<PageAuth />}
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
