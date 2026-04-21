import { useState } from "react";
import Sidebar from "../../modules/layout/sidebar/Sidebar"
import WelcomeCard from "../../modules/layout/welcomeCard/WelcomeCard"
// import { Logout } from "../../components/logOutHandling/LogoutHandling";
import CustomerTable from "../../modules/customers/customersTable/CustomerTable";

const DashboardPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="d-flex vh-100 position-relative">
     
      <Sidebar open={open} setOpen={setOpen} />

      
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