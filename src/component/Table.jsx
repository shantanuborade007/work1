import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-grid.css'

const Table = ({ columns, data }) => {
  const [gridApi, setGridApi] = React.useState(null);
  const [gridColumnApi, setGridColumnApi] = React.useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 200, width: 1200 }}>
      <AgGridReact
  rowData={data}
  columnDefs={columns.map(column => ({
    headerName: column.field,
    field: column.field,
    sortable: column.sortable,
    filter: column.filter
  }))}
  onGridReady={onGridReady}
/>
    </div>
  );
};

export default Table;
