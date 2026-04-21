import React from "react";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import DeleteConfirmation from "../deleteConfirmation/DeleteConfirmation";
import { formatPhoneNumber } from "../../utils/formatPhone";
import CustomerTable from "../customersTable/CustomerTable";
import Button from "../../../ui/button/Button";
import { useGetAllCustomer } from "../../hooks/customer/useGetAllCustomer";
import { useDeleteCustomer } from "../../hooks/customer/useDeleteCustomer";

const CustomerTableColumns = () => {
  const { data: customers = [] } = useGetAllCustomer({});
  const { mutate: deleteCustomer } = useDeleteCustomer(); 
  const [showConfirm, setShowConfirm] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const navigate = useNavigate();
  const data = useMemo(() => customers, [customers]);
  
  const handleEdit = (customer) => {
    navigate("/add-contact-form", { state: customer });
  };

  const openDeleteConfirm = (id) => {
    setCustomerToDelete(id);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
  deleteCustomer(customerToDelete, {
    onSuccess: () => {
      setShowConfirm(false);
      setCustomerToDelete(null);
    },
  });
};
  const cancelDelete = () => {
    setShowConfirm(false);
    setCustomerToDelete(null);
  };

  const columns = useMemo(() => [
  {
    header: "Name",
    accessorFn: (row) => `${row.firstname} ${row.lastname}`,
    cell: ({ row }) => {
      const customer = row.original;

      return (
        <div className="d-flex gap-3">
          <div
            className="bg-primary text-white d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
            style={{ width: "30px", height: "30px", fontSize: "12px" }}
          >
            {customer?.firstname?.[0]}
            {customer?.lastname?.[0]}
          </div>
          <div className="mt-1 customer-access">
            {customer?.firstname} {customer?.lastname}
          </div>
        </div>
      );
    },
  },
  {
      header: "Email",
      accessorKey: "primaryEmail",
      cell: ({row}) => {
        const email = row.original.primaryEmail;
        return(
          <div className="d-inline-block text-truncate customer-access align-items-center" style={{maxWidth: "180px", }}>
          <span className="me-1"><i className="fa-solid fa-envelope"></i></span>
          {email}
          </div>
        )
      }
    },
    {
      header: "Designation",
      accessorKey: "designation",
      cell: ({ row }) => {
        const designation = row.original.designation;
        return (
          <span className="badge rounded-pill bg-success-subtle text-success">
            {designation}
          </span>
        );
      },
    },
    {
      header: "Phone",
      accessorKey: "primaryContactNo",
      cell: ({ row }) => {
        const phone = formatPhoneNumber(row.original.primaryContactNo);
        return (
          <div className="d-flex gap-1 customer-access align-items-center">
            <span style={{ fontSize: "14px" }}>
              <i className="fa-solid fa-phone"></i>
            </span>
            {phone}
          </div>
        );
      },
    },
    {
      header: "Company",
      accessorKey: "company",
    },
    {
      header: "Type",
      accessorKey: "contactType",
      cell: ({row}) => {
        const type = row.original.contactType;
        return (
          <span className="badge rounded-pill bg-danger-subtle text-danger">{type}</span>
        )
      }
    },
   {
  id: "city",
  header: "City",
  accessorFn: (row) => row.address?.city,
},
{
  id: "state",
  header: "State",
  accessorFn: (row) => row.address?.state,
},
{
  id: "country",
  header: "Country",
  accessorFn: (row) => row.address?.country,
},
    {
      header: "Last_Contacted",
      accessorKey: "lastContactedDate",
      cell : ({row}) => {
        const lastContacted = row.original.lastContactedDate;
      return (
        <div className="text-truncate" style={{maxWidth: "130px", }}>
          {lastContacted}
        </div>
      )}
    },




  {
    header: "Actions",
    enableSorting: false,
    cell: ({ row }) => {
      const customer = row.original;

      return (
        <div className="d-flex gap-2">
          <Button
            className="btn btn-sm btn-warning"
            onClick={(e) => {
              e.stopPropagation();
              handleEdit(customer);
            }}
            icon={<i className="fa-regular fa-pen-to-square"></i>}
          />

          <Button
            className="btn btn-sm btn-danger"
            onClick={(e) => {
              e.stopPropagation();
              openDeleteConfirm(customer._id);
            }}
            icon={<i className="fa-regular fa-trash-can"></i>}
          />
        </div>
      );
    },
  },
], [handleEdit, openDeleteConfirm]);

  return (
    <div>
      <CustomerTable data={data} columns={columns} />
      <DeleteConfirmation
        show={showConfirm}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
};

export default CustomerTableColumns;
