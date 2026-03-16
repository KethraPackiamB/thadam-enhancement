import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import { Logout } from "../components/logOutHandling/LogoutHandling";
import { useState } from "react";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="d-flex vh-100 position-relative">
  <Sidebar open={open} handleLogout={Logout} />

  {open && (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 d-md-none"
      style={{ zIndex: 1040 }}
      onClick={() => setOpen(false)}
    ></div>
  )}

  <div className="flex-grow-1 d-flex flex-column bg-light overflow-auto">
    <div className="border-bottom bg-white p-2">
      <button
        className="btn btn-outline-secondary d-md-none"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
    </div>

    <div className="p-4">
      <Outlet />
    </div>
  </div>
</div>
  );
};

export default DashboardLayout;
