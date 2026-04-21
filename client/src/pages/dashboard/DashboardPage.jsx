import { useState } from "react";
import WelcomeCard from "../../layout/welcomeCard/WelcomCard";
import CustomerTable from "../../components/table/CustomerTable";
import { Logout } from "../../components/logOutHandling/LogoutHandling";
import Sidebar from "../../modules/layout/sidebar/Sidebar";

const DashboardPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="d-flex vh-100 position-relative">
     
      <Sidebar open={open} setOpen={setOpen} handleLogout={Logout} />

      
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
          <WelcomeCard />

          <div>
            <CustomerTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;