import CustomerHeader from "../../../modules/customer/header/CustomerHeader";
import CustomerMoreInfo from "../../../modules/customer/moreInfo/moreInformation/CustomerMoreInfo";
import CustomerAddress from "../../../modules/customer/moreInfo/address/CustomerAddress";
import CustomerEngagement from "../../components/customer/CustomerEngagement";
import { useGetCustomer } from "../../hooks/customer/useGetCustomer";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Sidebar from "../../components/sidebar/Sidebar";
import CustomerSocials from "../../../modules/customer/socialLinks/CustomerSocials";
import CustomerNotes from "../notes/CustomerNotes";
import DeleteButton from "../../../modules/actions/deleteCustomer/DeleteButton";
const CustomerInfoPage = () => {
  const { id } = useParams();
  const { data: customer, isLoading, isError, error } = useGetCustomer(id);

  const navigate = useNavigate();
  const handleEdit = (customer) => {
    navigate("/add-customer-form", { state: customer });
  };
  if (isError) {
    return (
      <div className="text-center mt-5 text-danger ">
        <h3>{error?.message || "Something went wrong"}</h3>
      </div>
    );
  }

  if (isLoading) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary mb-2"></div>
      <p>Loading...</p>
    </div>
  );
}
  return (
    <div className="d-flex">
      <div style={{ width: "240px", flexShrink: 0 }}>
        <Sidebar />
      </div>
      <div
        className="flex-grow-1 vh-100"
        style={{ overflowX: "hidden", overflowY: "auto" }}
      >
        <div
          className=" py-0 gradient-bg  sticky-top"
          // style={{ backgroundColor:  "#2563eb", color: "#eef2ff"}}
        >
          <div>
            <Button
              className="btn "
              onClick={() => navigate("/")}
              icon={<i className="fa-solid fa-arrow-left fa-lg text-light"></i>}
              class="bi bi-caret-left-square"
            />
            <div className="d-flex align-items-center justify-content-end gap-2 me-3">
              <Button
                buttonText="Edit"
                className="btn btn-primary rounded-0 d-flex align-items-center justify-content-center"
                style={{ height: "35px", width: "90px" }}
                onClick={() => handleEdit(customer)}
                icon={<i className="bi bi-pencil-square me-2"></i>}
              />

              <DeleteButton
                id={customer._id}
                redirect
                text="Delete"
                className="btn btn-primary rounded-0 d-flex align-items-center justify-content-center"
                style={{ height: "35px", width: "90px" }}
                icon={<i className="bi bi-trash3-fill me-2 "></i>}
              />
            </div>
          </div>
          <CustomerHeader customer={customer} />
        </div>
        <div>
          <div
            className="row p-3 mx-0"
            style={{ backgroundColor: "white", color: "#2563eb" }}
          >
            <div className="col-7 ">
              <CustomerMoreInfo customer={customer} />
            </div>
            <div className="col-5">
              <div className="">
                <CustomerAddress address={customer.address} />
              </div>
            </div>
            <div className="pt-3">
              {/* <CustomerEngagement engagement={customer} /> */}
              <CustomerSocials customer={customer} />
            </div>
            <div className="pt-3">
              <CustomerNotes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerInfoPage;
