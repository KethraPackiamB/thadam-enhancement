import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";

import "./DashboardLayout.css";
import { Logout } from "../components/logOutHandling/LogoutHandling";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setOpen((prev) => !prev);
  // };

  const closeSidebar = () => {
    setOpen(false);
  };

  return (
    <div className="layout">
      <Sidebar open={open} handleLogout={Logout} />

      {open && <div className="overlay" onClick={closeSidebar}></div>}

      <div className="mainContent">
        {/* <Navbar toggleSidebar={toggleSidebar} /> */}

        <div className="pageContent">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
