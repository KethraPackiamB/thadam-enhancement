import { Routes, Route } from "react-router-dom";
import AuthDetails from "../auth/AuthDetails";
import  DashboardPage from "../pages/dashboard/DashboardPage";
import LandingPage from "../pages/landingPage/LandingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LandingPage />} />

      <Route path="/auth/details" element={<AuthDetails />} />

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
