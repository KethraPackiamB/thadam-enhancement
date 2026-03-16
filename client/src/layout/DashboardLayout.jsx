import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import { Logout } from "../components/logOutHandling/LogoutHandling";

const DashboardLayout = () => {
  return (
    <div className="d-flex vh-100">

      <Sidebar handleLogout={Logout} />

      <div className="flex-grow-1 p-4 bg-light overflow-auto">
        <Outlet />
      </div>

    </div>
  );
};

export default DashboardLayout;