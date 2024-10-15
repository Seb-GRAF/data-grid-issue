## MUI X Data Grid Custom Wrapper Issue
This repository demonstrates an issue with using a custom wrapper component for MUI X Data Grid within a design system. (https://github.com/mui/mui-x/issues/8953).

The project consists of two main parts:

1. [Design System](./design-system/README.md)
2. [Design System Consumer](./design-system-consumer/README.md)

The "consumer" application is experiencing issues when trying to use certain features of MUI X Data Grid within a custom design system wrapper. Specifically:

1. Using a GridColDef of type 'actions' throws the following error:
   ```
   Uncaught Error: MUI X: useGridRootProps should only be used inside the DataGrid, DataGridPro or DataGridPremium component.
   ```

2. Attempting to use custom slots, such as a toolbar, results in this error:
   ```
   Uncaught Error: MUI X: Could not find the Data Grid context.
   It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.
   This can also happen if you are bundling multiple versions of the Data Grid.
   ```

These errors suggest that the custom design system wrapper (`StyledDataGrid`) may not be properly forwarding the necessary context or props to the underlying MUI X Data Grid component.

### Steps to Reproduce

1. Clone the repository
2. Run `npm install` in both the `design-system` and `design-system-consumer` directories
3. Run `npm run dev` in the `design-system-consumer` directory
4. Observe the errors in the console
