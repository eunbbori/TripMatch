import React from "react";
import { useTable, Column, useSortBy } from "react-table";

interface TableProps {}

const columns: Array<Column<Data>> = [
  {
    Header: "test1",
    accessor: "name",
  },
  {
    Header: "test2",
    accessor: "age",
  },
];

interface Data {
  name: string;
  age: number;
}

const data: Data[] = [
  {
    name: "John",
    age: 23,
  },
  {
    name: "Jane",
    age: 26,
  },
];

const Table: React.FC<TableProps> = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Data>({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={i}>
            {headerGroup.headers.map((column, k) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                key={k}
              >
                {column.render("Header")}
                <span>
                  {" "}
                  {column.isSorted
                    ? column.isSortedDesc
                      ? " 🔽"
                      : " 🔼"
                    : ""}{" "}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={i}>
              {row.cells.map((cell, k) => {
                return (
                  <td {...cell.getCellProps()} key={k}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
