import React, { useMemo } from 'react';
import {useTable} from 'react-table';
import { v4 as uuidv4 } from 'uuid';

function ReactTable() {
    const data = useMemo(
        () => [
            { cat: "Category 1", a: 0.15, b: 0.22, c: 0.42 },
            { cat: "Category 2", a: 0.4, b: 0.36, c: 0.2 },
            { cat: "Category 3", a: 0.35, b: 0.17, c: 0.34 },
            { cat: "Category 4", a: 0.3, b: 0.29, c: 0.26 },
            { cat: "Category 5", a: 0.55, b: 0.3, c: 0.58 },
            { cat: "Category 6", a: 0.11, b: 0.25, c: 0.49 }
        ],
        []
    );
    const columns = useMemo(
        () => [
            { Header: "", accessor: "cat" },
            { Header: "A", accessor: "a" },
            { Header: "B", accessor: "b" },
            { Header: "C", accessor: "c" }
        ],
        []
    );
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data });

    const generateTableHead = () =>
    headerGroups.map(headerGroup => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map(column => (
          <th {...column.getHeaderProps()}>{column.render("Header")}</th>
        ))}
      </tr>
    ));

    const convertDecimalToPercentageWithinCell = value => isNaN(value) ? value : `${Math.round(value * 100)}%`;

    const generateTableBody = () =>
    rows.map(row => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map(cell => {
            return (
              <td key={uuidv4()}>
                {convertDecimalToPercentageWithinCell(cell.value)}
              </td>
            );
          })}
        </tr>
      );
    });

    return (
        <table {...getTableProps()}>
            <thead>{generateTableHead()}</thead>
            <tbody {...getTableBodyProps()}>{generateTableBody()}</tbody>
        </table>
    )
}

export default ReactTable;
