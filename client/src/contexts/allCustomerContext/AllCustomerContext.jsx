import { createContext } from "react";
import { useGetAllCustomer } from "../../services/useGetAllCustomer";
import { useAddCustomer } from "../../services/useAddCustomer";
import { useUpdateCustomer } from "../../services/useUpdateCustomer";
import { useDeleteCustomer } from "../../services/useDeleteCustomer";

export const AllCustomerContext = createContext();

export const AllCustomerProvider = ({ children }) => {
  const filters = {}; // later you can pass filters dynamically

  const {
    data: customers = [],
    isLoading,
    error,
  } = useGetAllCustomer(filters);

  const addMutation = useAddCustomer();
  const updateMutation = useUpdateCustomer();
  const deleteMutation = useDeleteCustomer();

  return (
    <AllCustomerContext.Provider
      value={{
        customers,
        isLoading,
        error,
        addCustomer: addMutation.mutate,
        updateCustomer: updateMutation.mutate,
        deleteCustomer: deleteMutation.mutate,
      }}
    >
      {children}
    </AllCustomerContext.Provider>
  );
};