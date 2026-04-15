import { Routes, Route } from "react-router-dom";
import AuthDetailsPage from "../auth/AuthDetails";
import AuthGuard from "../components/authGuard/AuthGuard";
import { DashboardPage } from "../pages/dashboard/DashboardPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LandingPage />} />

      <Route path="/auth/details" element={<AuthDetailsPage />} />

      <Route
        path="/"
        element={
          <AuthGuard>
            <DashboardPage />
          </AuthGuard>
        }
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
