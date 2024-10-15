import { StyledDataGrid } from '@seb-graf/design-system';
import { GridColDef, GridRowsProp, GridToolbarQuickFilter, GridToolbarContainer } from '@mui/x-data-grid-premium';

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
  },
  {
    field: 'email',
    headerName: 'Email',
  },
  {
    field: 'phone',
    headerName: 'Phone',
  },
  {
    field: 'address',
    headerName: 'Address',
  },
];

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
};

export default function App() {
  return (
      <StyledDataGrid rows={rows} columns={columns}  columnBufferPx={20} slots={{ toolbar: CustomToolbar }} />
  );
}