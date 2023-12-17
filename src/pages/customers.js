import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersTable } from 'src/sections/customer/customers-table';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import { applyPagination } from 'src/utils/apply-pagination';
import { CustomerForm } from 'src/sections/customer/customers-form';

const now = new Date();

const data = [
  {
    id: '5e887ac47eed25302345',
    name: 'Haris',
    location: 'Kodoor',
    mobile: '8086046399',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
 
  {
    id: '5e887ac47eed253091uyt56',
    name: 'Carson Darrin',
    location: 'Paris',
    mobile: '8086046399',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e887ac47eed25309154hbr',
    name: 'Fahad sha',
    location: 'Paris',
    mobile: '8086046399',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
 
  {
    id: '5e887ac47eed253091th645',
    name: 'Munavir',
    location: 'Paris',
    mobile: '8086046399',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
 
  {
    id: '5e887ac47eed2530564554f',
    name: 'Ahmedka',
    location: 'Paris',
    mobile: '8086046399',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
  {
    id: '5e887ac47eed2jh6lui667',
    name: 'Carson Darrin',
    location: 'Paris',
    mobile: '8086046399',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
 
  {
    id: '5e887ac47eed253091mjyh564',
    name: 'Carson Darrin',
    location: 'Paris',
    mobile: '8086046399',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
 
  {
    id: '5e887ac47eed2530try545',
    name: 'Carson Darrin',
    location: 'Paris',
    mobile: '8086046399',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
 
  {
    id: '5e887ac47eed253091mu5466',
    name: 'Carson Darrin',
    location: 'Paris',
    mobile: '8086046399',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
 
  {
    id: '5e887ac47eed2531234',
    name: 'Carson Darrin',
    location: 'Paris',
    mobile: '8086046399',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
  },
 
];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  return (
    <>
      <Head>
        <title>
          Customers | Devias Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Customers
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            <CustomersSearch />
            <CustomerForm />
            <CustomersTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
