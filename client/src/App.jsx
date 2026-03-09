import { BrowserRouter } from "react-router-dom";
import { WelcomeMessageContext } from "./context/WelcomeMessageContext";
import DashboardLayout from "./layout/DashboardLayout";

import WelcomeMessage from "./pages/Dashboard/WelcomeMessage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import AppRoutes from "./routes/AppRoutes";


function App() {
  return (
    <div>
    {/* <WelcomeMessageContext>
      <DashboardLayout />
      <WelcomeMessage />
    </WelcomeMessageContext> */}
   <BrowserRouter>
   <AppRoutes/>
   </BrowserRouter>
    </div>
   
  );
}

export default App;

