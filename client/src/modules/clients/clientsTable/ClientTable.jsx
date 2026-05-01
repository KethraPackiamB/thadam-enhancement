import { useReactTable } from '@tanstack/react-table';
import { getCoreRowModel, flexRender } from '@tanstack/react-table';
import React from 'react';

const ClientTable = ({columns, data}) => {

    const clientTable = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    
  return (
    <div>
      <div className="table-responsive border rounded-3">
          <table className="table table-borderless table-hover align-middle p-2">
            <thead className="table-light">
              {clientTable.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="align-middle text-center text-secondary fw-light"
                      onClick={
                        header.column.getCanSort()
                          ? header.column.getToggleSortingHandler()
                          : undefined
                      }
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}

                      {header.column.getCanSort() && (
                        <span className="ms-1">
                          {header.column.getIsSorted() === "asc" && (
                            <i className="fa-solid fa-sort-up"></i>
                          )}
                          {header.column.getIsSorted() === "desc" && (
                            <i className="fa-solid fa-sort-down"></i>
                          )}
                          {!header.column.getIsSorted() && (
                            <i className="fa-solid fa-sort"></i>
                          )}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {ClientTable.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  style={{ cursor: "pointer" }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="align-middle text-center text-secondary fw-light"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default ClientTable;
