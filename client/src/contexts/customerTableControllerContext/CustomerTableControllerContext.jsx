import { createContext, useState} from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const CustomerTableControllerContext = createContext();

export const CustomerTableControllerProvider = ({children}) => {
     const queryClient = useQueryClient();
    const [search, setSearch] = useState();
  const [location, setLocation] = useState("");
  const [contactType, setContactType] = useState("");
  const [designation, setDesignation] = useState("");
   const [view, setView] = useState("table");

  const {
    data: customers = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["customers", search, location, contactType, designation],
    queryFn: () => getCustomers(search, location, contactType, designation),
  });

  const {
    data: filters = {},
  } = useQuery({
    queryKey: ["filters"],
    queryFn: getCustomerFilter,
  })

  const handleView = () => {
        setView(prev => prev === "table" ? "card" : "table")
    }

    return(
        <div>
            <CustomerTableControllerContext.Provider  value={{
          customers,
          isLoading,
          error,
          totalCustomers: customers.length ?? 0,
          search,
          filters,
          location,
          contactType,
          designation,
          setContactType,
          setDesignation,
          setLocation,
          setSearch,
          view,
          handleView
          }}>
                {children}
            </CustomerTableControllerContext.Provider>

        </div>
    )
}