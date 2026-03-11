import { useState, createContext } from "react";

export const messageContext = createContext();

export const WelcomeMessageContext = ({ children }) => {
  const [welcomeMessage, setWelcomeMessage] = useState("");

  return (
    <messageContext.Provider
      value={{ welcomeMessage, setWelcomeMessage }}
    >
      {children}
    </messageContext.Provider>
  );
};
