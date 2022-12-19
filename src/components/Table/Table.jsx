import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import getItems from "../../services/MockAPI";
import { COLUMNS } from "./Columns";
//import MOCK_DATA from "./MOCK_DATA.json"



export const Table = () => {

  
  const columns = useMemo(() => COLUMNS, []);
  const data = useState(() => getItems, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

/* 
export default AppTable






  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function AppTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'id',
            accessor: 'id',
          },
          {
            Header: 'Marca',
            accessor: 'Marca',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Codigo',
            accessor: 'Codigo',
          },
          {
            Header: 'Audio',
            accessor: 'Audio',
          },
          {
            Header: 'Entradas',
            accessor: 'Entradas',
          },          
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => getItems(3), [])

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
} */
