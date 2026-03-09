import { WelcomeMessageContext } from "./context/WelcomeMessageContext";
import DashboardLayout from "./layout/DashboardLayout";
import WelcomeMessage from "./pages/dashboard/WelcomeMessage";
import CustomerTable from "./components/table/CustomerTable";
import { CustomerContextProvider } from "./context/CustomerTableContext";

function App() {
  return (
    <div>
    <WelcomeMessageContext>
      <DashboardLayout />
      <WelcomeMessage />
    </WelcomeMessageContext>
     <CustomerContextProvider>
        <CustomerTable/>
    </CustomerContextProvider>
    </div>
  );
}

export default App;
