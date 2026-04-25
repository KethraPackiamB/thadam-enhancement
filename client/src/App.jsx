import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { GooeyToaster } from "goey-toast";
import "goey-toast/styles.css";
import { CustomerTableControllerProvider } from "./contexts/customerTableControllerContext/CustomerTableControllerContext";
import { CustomerProvider } from "./contexts/customerContext/CustomerContext";
import { AllCustomerProvider } from "./contexts/allCustomerContext/AllCustomerContext";


const App = () => {

   const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GooeyToaster position="top-center" />
        <AllCustomerProvider>
        <CustomerProvider>
        <CustomerTableControllerProvider>
        <AppRoutes />
        </CustomerTableControllerProvider>
        </CustomerProvider>
        </AllCustomerProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App