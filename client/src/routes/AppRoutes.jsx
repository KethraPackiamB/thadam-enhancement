import { Routes, Route } from "react-router-dom";
import CustomerDetailPage from "../pages/CustomerDetailPage/CustomerDetailPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/customers/:id" element={<CustomerDetailPage />} />
    </Routes>
  );
};
export default AppRoutes;
