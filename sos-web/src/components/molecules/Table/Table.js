import {
  StyledTable,
  TableHeading,
  TableContent,
  TableTitle,
  TableHead,
  TableRow,
  TableCell,
} from './Table.styles';

export const Table = ({ title, rows, array, children, ...props }) => {
  return (
    <StyledTable>
      <TableHeading>
        <TableRow>
          <TableHead colSpan={array.length + 1}>
            <TableTitle>{title}</TableTitle>
          </TableHead>
        </TableRow>
      </TableHeading>
      <TableContent>
        {rows.map(({ text, value }) => (
          <TableRow>
            <TableCell>{text}</TableCell>
            {array.map((item) => {
              return <TableCell>{item[value]}</TableCell>;
            })}
          </TableRow>
        ))}
      </TableContent>
    </StyledTable>
  );
};
