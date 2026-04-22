import { createContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";


import { getCustomers, getCustomerFilter } from "../../api/CustomerApi";

export const CustomerTableControllerContext = createContext();

export const CustomerTableControllerProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState(""); 
  const [designation, setDesignation] = useState("");
  const [view, setView] = useState("table");
  const[contactType,setContactType]=useState("")
  
  const {
    data: customers = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["customers", search, location, role, designation],
    queryFn: () =>
      getCustomers(search, location, role, designation),
  });

  
  const { data: filters = {} } = useQuery({
    queryKey: ["filters"],
    queryFn: getCustomerFilter,
  });

  
  const handleView = () => {
    setView((prev) => (prev === "table" ? "card" : "table"));
  };

  return (
    <CustomerTableControllerContext.Provider
      value={{
        customers,
        isLoading,
        isError,
        error,
        totalCustomers: customers.length,
        filters,
        search,
        setSearch,
        location,
        setLocation,
        role,
        setRole,
        designation,
        setDesignation,
        contactType,
        setContactType,       
        view,
        handleView,
      }}
    >
      {children}
    </CustomerTableControllerContext.Provider>
  );
};