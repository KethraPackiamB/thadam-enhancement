import { BrowserRouter } from "react-router-dom";
import { WelcomeMessageContext } from "./context/WelcomeMessageContext";
import { CustomerContextProvider } from "./context/CustomerTableContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
   <BrowserRouter>
      <WelcomeMessageContext>
        <CustomerContextProvider>
          <AppRoutes />
        </CustomerContextProvider>
      </WelcomeMessageContext>
    </BrowserRouter>
     </QueryClientProvider>
  );
}

export default App;
