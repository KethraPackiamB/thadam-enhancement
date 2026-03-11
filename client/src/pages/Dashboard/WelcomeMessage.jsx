import { useEffect, useContext } from "react";
import { messageContext } from "../../context/WelcomeMessageContext";
import CustomerTable from "../../components/table/CustomerTable";

import "./WelcomeMessage.css";

const WelcomeMessage = () => {
  const name = localStorage.getItem("name") ?? "Guest";
  const { setWelcomeMessage } = useContext(messageContext);

  useEffect(() => {
    setWelcomeMessage(`Welcome back, ${name}`);
  }, []);

  return (
   <>
    <div className="welcomeMessage">
      <h1>{name}'s Dashboard</h1>
      <p>Welcome back, {name}</p>


    </div>
    <div>

      <CustomerTable/>
    </div>
   
   
   </>
  );
};

export default WelcomeMessage;