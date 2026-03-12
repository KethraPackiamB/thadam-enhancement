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
  const { customers } = useContext(CustomerTableContext);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/add-customer-form')
  }

  const data = useMemo(() => customers, []);

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "Name",
      accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Designation",
      accessorKey: "designation",
    },
    {
      header: "Phone",
      accessorKey: "phone",
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
              onClick={() => handleDelete(customer.id)}
            >
              <i className="fa-regular fa-trash-can"></i>
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
    console.log("Edit customer:", customer);
  };

  const handleDelete = (id) => {
    console.log("Delete customer id:", id);
  };

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
      <div className="border p-3">
        <table className="table table-hover">
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

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
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
