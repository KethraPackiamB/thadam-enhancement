// import {BrowserRouter} from "react-router-dom"
// import { WelcomeMessageContext } from "./context/WelcomeMessageContext";
// import DashboardLayout from "./layout/DashboardLayout";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerFormPage from "./pages/CustomerFormPage/CustomerFormPage";

// import CustomerTable from "./components/table/CustomerTable";
// import { CustomerContextProvider } from "./context/CustomerTableContext";

// import WelcomeMessage from "./pages/Dashboard/WelcomeMessage";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <div>
        {/* <WelcomeMessageContext>
          <DashboardLayout />
          <WelcomeMessage />
        </WelcomeMessageContext>
        <CustomerContextProvider>
          <CustomerTable />
        </CustomerContextProvider>

        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter> */}
        <CustomerFormPage/>
      </div>
    </>
  );
}

export default App;
