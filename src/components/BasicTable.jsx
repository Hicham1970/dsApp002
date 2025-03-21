/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from '../functions/Columns_Contacts';
import { Contacts } from '../data/contacts_table';

function BasicTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Contacts, []);

  useTable({
    columns,
    data
  });




  return (
    <div>

    </div>
  )
}

export default BasicTable
