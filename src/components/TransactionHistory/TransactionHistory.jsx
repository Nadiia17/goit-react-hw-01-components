import {
  Table,
  TableItem,
  TableRow,
  TableTitle,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableItem>{type}</TableItem>
            <TableItem>{amount}</TableItem>
            <TableItem>{currency}</TableItem>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
