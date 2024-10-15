import { StyledDataGrid } from '@seb-graf/design-system';
import { GridColDef, GridRowsProp, GridToolbarQuickFilter } from '@mui/x-data-grid-premium';

const rows: GridRowsProp = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, USA',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, USA',
  },
  {
    id: 3,
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, USA',
  },
];

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    flex: 1,
  },
  {
    field: 'address',
    headerName: 'Address',
    flex: 1,
  },
  /***
  GridColDef of type 'actions' throws the following error: 👇
  Uncaught Error: MUI X: useGridRootProps should only be used inside the DataGrid, DataGridPro or DataGridPremium component.
  ***/

  // {
  //   field: 'actions',
  //   type: 'actions',
  //   headerName: 'Actions',
  //   width: 100,
  //   getActions: () => [
  //     <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={() => {}} />,
  //     <GridActionsCellItem icon={<SecurityIcon />} label="Toggle Admin" onClick={() => {}} showInMenu />,
  //   ],
  // },
];

const Toolbar = () => <GridToolbarQuickFilter />;

export default function App() {
  return (
    <StyledDataGrid
      rows={rows}
      columns={columns}
      /***
      GridColDef of type 'actions' throws the following error: 👇
      Uncaught Error: MUI X: Could not find the Data Grid context.
      It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.
      This can also happen if you are bundling multiple versions of the Data Grid.
      ***/
      // slots={{
      //   toolbar: Toolbar,
      // }}
    />
  );
}