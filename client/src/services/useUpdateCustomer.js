import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCustomer } from "../../api/customerApi";

export const useUpdateCustomer = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
    mutationFn: updateCustomer,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(["customers"]);
      queryClient.invalidateQueries(["customer", variables.id]);
    },
    });
};