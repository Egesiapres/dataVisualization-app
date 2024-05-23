import { Route, Routes } from "react-router";
import PagePersonalArea from "../personalArea/PagePersonalArea";
import PageError from "../app/PageError";

export default function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route
        path="/personal-area"
        element={<PagePersonalArea />}
      />

      <Route
        path="*"
        element={<PageError targetPage="personal-area" />}
      />
    </Routes>
  );
}
