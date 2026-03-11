import { BrowserRouter } from "react-router-dom";
import { WelcomeMessageContext } from "./context/WelcomeMessageContext";
import { CustomerContextProvider } from "./context/CustomerTableContext";

import AppRoutes from "./routes/AppRoutes";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <BrowserRouter>
      <WelcomeMessageContext>
        <CustomerContextProvider>
          <AppRoutes />
        </CustomerContextProvider>
      </WelcomeMessageContext>
    </BrowserRouter>
  );
}

export default App;