import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import WelcomeMessage from "../pages/Dashboard/WelcomeMessage";
import CustomerTable from "../components/table/CustomerTable";
import { LandingPage } from "../pages/landingPage/LandingPage";
import AuthDetailsPage from "../auth/AuthDetails";
import CustomerFormPage from "../pages/CustomerFormPage/CustomerFormPage";
import CustomerDetailPage from "../pages/CustomerDetailPage/CustomerDetailPage";
import AuthGuard from "../components/authGuard/AuthGuard";

const AppRoutes = () => {
  return (
    
    <Routes>
      <Route path="/login" element={<LandingPage />} />
      

      <Route path="/auth/details" element={<AuthDetailsPage />} />
      <Route path="/customer/:id" element={<CustomerDetailPage/>} />
      {/* <Route path="/auth/details" element={
        
          <AuthDetailsPage />
        } /> */}

      <Route path="/" element={
        <AuthGuard>
           <DashboardLayout />
        </AuthGuard>
       
        }>
        <Route index element={<WelcomeMessage />} />
        <Route path="customers" element={<CustomerTable />} />
       
    </Route>
       <Route path="/add-customer-form" element={
        <AuthGuard>
          <CustomerFormPage/>
        </AuthGuard>}/>
    
    </Routes>
  );
};

export default AppRoutes;
