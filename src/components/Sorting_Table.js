/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Contacts } from '../data/contacts_table';
import { operations_data } from '../data/operation_data';
import { hydrostatic_table } from '../data/hydrostatic_table'
import { COLUMNS, OPERATIONS_DATA, GROUPED_COLUMNS, HYDROSTATIC_TABLE } from '../functions/Columns';
import '../BasicTable.css';
import { useTheme } from '@mui/material';
import { tokens } from '../theme';

function SortingTable() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Définir les variables CSS pour le thème
  React.useEffect(() => {
    // Couleurs existantes
    document.documentElement.style.setProperty('--primary-bg',
      theme.palette.mode === 'dark' ? colors.primary[500] : colors.primary[50]);
    document.documentElement.style.setProperty('--primary-400',
      theme.palette.mode === 'dark' ? colors.primary[400] : colors.grey[200]);
    document.documentElement.style.setProperty('--primary-600',
      theme.palette.mode === 'dark' ? colors.primary[600] : colors.primary[300]);
    document.documentElement.style.setProperty('--greenAccent-500', colors.greenAccent[500]);
    document.documentElement.style.setProperty('--greenAccent-600', colors.greenAccent[600]);
    document.documentElement.style.setProperty('--grey-100',
      theme.palette.mode === 'dark' ? colors.grey[100] : colors.grey[900]);
    document.documentElement.style.setProperty('--grey-800',
      theme.palette.mode === 'dark' ? colors.grey[800] : colors.grey[200]);
  }, [colors, theme.palette.mode]);


  // Contacts Table
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Contacts, []);

  // Operations table
  // const columns = useMemo(() => OPERATIONS_DATA, []);
  // const data = useMemo(() => operations_data, []);

  // hydrostatic table
  // const columns = useMemo(() => HYDROSTATIC_TABLE, []);
  // const data = useMemo(() => hydrostatic_table, []);

  // Ajouter ici la logique de tri useSortBy comme 2eme argument
  const tableInstance = useTable({
    columns,
    data
  }, useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    getSortByToggleProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = tableInstance;

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={i}>
              {headerGroup.headers.map((column, index) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} key={index}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDownwardIcon />
                      ) : (
                        <ArrowUpwardIcon />
                      )
                    ) : (
                      ''
                    )}
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
                {row.cells.map((cell, index) => (
                  <td {...cell.getCellProps()} key={index}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup, i) => (
            <tr {...footerGroup.getFooterGroupProps()} key={i}>
              {footerGroup.headers.map((column, index) => (
                <td
                  {...column.getFooterProps()}
                  key={index}
                  data-type={column.isNumeric ? "numeric" : "text"}
                >
                  {column.render('Footer')}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}

export default SortingTable;