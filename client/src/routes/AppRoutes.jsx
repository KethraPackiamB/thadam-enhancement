import { Routes, Route } from "react-router-dom";
import AuthDetailsPage from "../auth/AuthDetails";
import DashboardPage from "../pages/dashboard/DashboardPage";
import LandingPage from "../pages/landing/LandingPage";
import AddCustomerPage from "../pages/customer/addCustomer/AddCustomer";
import CustomerInfoPage from "../pages/customer/customerDetail/CustomerInfoPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LandingPage />} />
      <Route path="/customer/:id" element={<CustomerInfoPage />} />
      <Route path="/auth/details" element={<AuthDetailsPage />} />
      <Route path="/" element={<DashboardPage />}></Route>
     <Route path="/add-contact-form" element={<AddCustomerPage />} />
    </Routes>
  );
};

export default AppRoutes;
