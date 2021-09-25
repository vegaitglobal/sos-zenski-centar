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
        {rows.map(({ text, value }, index) => (
          <TableRow key={index}>
            <TableCell>{text}</TableCell>
            {array.map((item, index) => (
              // TODO key
              <TableCell key={index}>{item[value]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableContent>
    </StyledTable>
  );
};
