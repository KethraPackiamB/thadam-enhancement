import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing/LandingPage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import AuthDetailsPage from "../auth/AuthDetails";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LandingPage />} />

      <Route path="/auth/details" element={<AuthDetailsPage />} />

      <Route
        path="/"
        element={
            <DashboardPage />
          
        }
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
