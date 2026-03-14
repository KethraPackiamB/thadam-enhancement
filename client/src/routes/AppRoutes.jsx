import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import WelcomeMessage from "../pages/Dashboard/WelcomeMessage";
import CustomerTable from "../components/table/CustomerTable";
import { LandingPage } from "../pages/landingPage/LandingPage";
import AuthDetailsPage from "../auth/AuthDetails";
import CustomerFormPage from "../pages/CustomerFormPage/CustomerFormPage";
import CustomerDetailPage from "../pages/CustomerDetailPage/CustomerDetailPage";

const AppRoutes = () => {
  return (
    
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/auth/details" element={<AuthDetailsPage />} />
      <Route path="/customer/:id" element={<CustomerDetailPage/>} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<WelcomeMessage />} />
        <Route path="customers" element={<CustomerTable />} />
       
    </Route>
       <Route path="/add-customer-form" element={<CustomerFormPage/>}></Route>
    </Routes>
  );
};

export default AppRoutes;
