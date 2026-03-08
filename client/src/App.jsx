import { WelcomeMessageContext } from "./context/WelcomeMessageContext";
import DashboardLayout from "./layout/DashboardLayout";
import WelcomeMessage from "./pages/dashboard/WelcomeMessage";

function App() {
  return (
    <WelcomeMessageContext>
      <DashboardLayout />
      <WelcomeMessage />
    </WelcomeMessageContext>
  );
}

export default App;
