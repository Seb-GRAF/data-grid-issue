import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import StyledDataGrid from '../../lib/components/StyledDataGrid';
import { GridColDef, GridRowsProp, GridToolbarQuickFilter, GridToolbarContainer } from '@mui/x-data-grid-premium';

const meta = {
  title: 'Components/Styled Data Grid',
  component: StyledDataGrid,
  parameters: {
    layout: 'centered',
    docs: {
      canvas: { sourceState: 'shown' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StyledDataGrid>;

export default meta;
type Story = StoryObj<typeof StyledDataGrid>;

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

// const CustomToolbar = () => {
//   return (
//     <GridToolbarContainer>
//       <GridToolbarQuickFilter />
//     </GridToolbarContainer>
//   );
// };

export const Default: Story = {
  render: (args) => (
    <StyledDataGrid rows={rows} columns={columns} />
  ),
};
