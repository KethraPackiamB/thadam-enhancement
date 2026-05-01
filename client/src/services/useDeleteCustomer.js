import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCustomer } from "../api/CustomerApi";

export const useDeleteCustomer = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      queryClient.invalidateQueries({ queryKey: ["filters"] });
    },
  });
};
