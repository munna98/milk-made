import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error',
  paid: 'completed'
};

export const InvoiceList = (props) => {
  const { orders = [{id:10,customer:'Munna',createdAt:new Date, status:'pending', amount:546 },
  {id:10,customer:'Munna',createdAt:new Date, status:'pending', amount:546 },
  {id:10,customer:'Munna',createdAt:new Date, status:'pending', amount:546 },
  {id:10,customer:'Munna',createdAt:new Date, status:'pending', amount:546 },
  {id:10,customer:'Munna',createdAt:new Date, status:'pending', amount:546 },
  {id:10,customer:'Munna',createdAt:new Date, status:'pending', amount:546 }], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Invoices" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  V No
                </TableCell>
                <TableCell sortDirection="desc">
                  Date
                </TableCell>
                <TableCell>
                  Customer
                </TableCell>
                <TableCell>
                  Amount
                </TableCell>
                <TableCell> 
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {
                const createdAt = format(order.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={order.id}
                  >
                    <TableCell>
                      {order.id}
                    </TableCell>
                    <TableCell>
                      {createdAt}
                    </TableCell>
                    <TableCell>
                      {order.customer}
                    </TableCell>
                    <TableCell>
                      {order.amount}
                    </TableCell>
                    <TableCell>
                      <SeverityPill color={statusMap[order.status]}>
                        {order.status}
                      </SeverityPill>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

InvoiceList.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
