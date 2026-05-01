import React, { useMemo } from 'react'
import ClientTable from '../clientsTable/ClientTable';
import clientData from './MOCK_DATA (3).json'

const ClientTableColumns = () => {

    const data = useMemo(() => clientData, [])

    const clientColumns = [{
       header : "Name",
       accessorKey: "name",
    },
    {
         header : "Email",
        accessorKey : "primaryEmail",
    },
    {
        header : "Designation",
        accessorKey : "designation",
    },
    {
        header : "Phone",
        accessorKey : "primaryContactNo",
    },
    {
        header : "Company",
        accessorKey : "company",
    },
    {
        header : "Type",
        accessorKey : "type",
    },
    {
        header : "City",
        accessorKey : "city",

    },
    {
        header : "State",
        accessorKey: "state",

    },
    {
        header : "Country",
        accessorKey : "country"
    },
    {
        header : "Action",
          cell: () => {
    

        return (
          <div className="d-flex gap-2">
            <Button
              className="btn btn-sm btn-warning"
             
              icon={<i className="fa-regular fa-pen-to-square"></i>}
            />

            <Button
              className="btn btn-sm btn-danger"
             
              icon={<i className="fa-regular fa-trash-can"></i>}
            />
          </div>
        );
      },
    }
       

]

  return (
    <div>
      <ClientTable columns={clientColumns} data={data}/>
    </div>
  )
}

export default ClientTableColumns
