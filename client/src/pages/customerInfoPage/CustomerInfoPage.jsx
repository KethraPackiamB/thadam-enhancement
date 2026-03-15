import CustomerHeader from "../../components/customer/CustomerHeader";
import CustomerMoreInfo from "../../components/customer/CustomerMoreInfo";
import CustomerAddress from "../../components/customer/CustomerAddress";
import CustomerEngagement from "../../components/customer/CustomerEngagement";
import {getCustomerById} from "../../api/CustomerApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const CustomerInfoPage= () => {
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data = await getCustomerById(id);
        console.log(data);
        setCustomer(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCustomer();
  }, [id]);
 
  if (error) {
    return (
      <div className="text-center mt-5 text-danger ">
        <h3>{error}</h3>
      </div>
    );
  }
 
  if (!customer) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }
  return (
    <div className="container-fluid px-0">
      <div
        className=" py-4 "
        style={{ backgroundColor: "#eef2ff", color: "#2563eb" }}
      >
        <CustomerHeader customer={customer} />
      </div>
      <div>
        <div
          className="row p-3 "
          style={{ backgroundColor: "#eef2ff", color: "#2563eb" }}
        >
          <div className="col-8 ">
            <CustomerMoreInfo customer={customer} />
          </div>
          <div className="col-4">
            <div className="pb-3">
              <CustomerAddress address={customer.address} />
            </div>
            <div className="pt-3">
              <CustomerEngagement engagement={customer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerInfoPage;

