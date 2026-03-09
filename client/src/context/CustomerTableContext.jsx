import {createContext, useState} from "react";
import customerData from "../components/table/MOCK_DATA.json";

export const CustomerTableContext = createContext();

export const CustomerContextProvider = ({children}) => {

 const [customers, setCustomers] = useState(customerData);

    return(
        <div>
            <CustomerTableContext.Provider value={{customers, setCustomers}}>
                {children}
            </CustomerTableContext.Provider>
        </div>
    )
}