import { Routes, Route, BrowserRouter } from "react-router-dom";
import CustomerDetailPage from "../pages/CustomerDetailPage/CustomerDetailPage";
import CustomerFormPage from "../pages/CustomerFormPage/CustomerFormPage";
import CustomerTable from "../components/table/CustomerTable";
import { CustomerContextProvider } from "../context/CustomerTableContext";
import DashboardLayout from "../layout/DashboardLayout";
const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <DashboardLayout/>}></Route>
      <Route path="/customers/:id" element={<CustomerDetailPage />} />
      <Route path="/add-customer" element={<CustomerFormPage/>}></Route>
     
    </Routes>
   </BrowserRouter>
   
  );
};
export default AppRoutes;
