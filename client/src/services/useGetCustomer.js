import { useQuery } from "@tanstack/react-query";
import { getCustomerById } from "../../api/customerApi";
export const useGetCustomer = (id) => {
    return useQuery({
    queryKey: ["customer", id],
    queryFn: () => getCustomerById(id),
    enabled: !!id, 
    });
};