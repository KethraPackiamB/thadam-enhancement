import "./CustomerTable.css"
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useMemo, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { CustomerTableContext } from "../../context/CustomerTableContext";
const CustomerTable = () => {
  const { customers,deleteCustomer} = useContext(CustomerTableContext);
 
  const navigate = useNavigate();
 
  const handleNavigate = () => {
    navigate('/add-customer-form')
  }
 
  const data = useMemo(() => customers, [customers]);
 
  const columns = [
    {
      header: "profile",
      cell: ({ row }) => {
        const customer = row.original;

        return(
         <div className="bg-primary text-white d-flex align-items-center justify-content-center rounded-circle"
     style={{ width: "25px", height: "25px", fontSize: "10px"}}>
  {customer?.firstname[0] + customer?.lastname[0]}
</div>
        )
      }
    },
    {
      header: "Name",
      accessorFn: (row) => `${row.firstname} ${row.lastname}`,
    },
    {
      header: "Email",
      accessorKey: "primaryEmail",
    },
    {
      header: "Designation",
      accessorKey: "designation",
    },
    {
      header: "PhoneNo",
      accessorKey: "primaryContactNo",
    },
    {
      header: "Actions",
      cell: ({ row }) => {
        const customer = row.original;
 
        return (
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-warning"
              onClick={() => handleEdit(customer)}
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDelete(customer._id)}
            >
              <i className="fa-regular fa-trash-can"></i>
            </button>
            <button
              className="btn btn-sm"
              onClick={()=>handleClick(row)}
            >
              <i className="fa-regular fa-eye"></i>
            </button>
          </div>
        );
      },
    },
  ];
 
  const [filtering, setFiltering] = useState("");
 
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });
 
  const handleEdit = (customer) => {
    navigate("/add-customer-form", {state: customer})
  };
 
  const handleDelete = (id) => {
    deleteCustomer(id);
  };

  const handleClick = (row) => {
    navigate(`/customer/${row.original?._id}`)
  }
 
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-end gap-3 p-2 size-sm">
        <input
          type="search"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          placeholder="Search"
        />
        <button className="btn btn-primary " onClick={handleNavigate}>
          <i className="fa-solid fa-plus"></i> Add Customer
        </button>
      </div>
      <div className="table d-flex flex-column mb-5 table-responsive table-sm">
        <table className="table table-hover">
          <thead className="border-bottom" style={{ backgroundColor: "#141010ff" }}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-2">
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => table.setPageIndex(0)}
        >
          First Page
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous Page
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next Page
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          Last Page
        </button>
      </div>
    </div>
  );
};
 
export default CustomerTable;