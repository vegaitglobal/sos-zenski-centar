import {
  StyledTable,
  TableHeading,
  TableContent,
  TableTitle,
  TableHead,
  TableRow,
  TableCell,
} from './Table.styles';

export const Table = ({ title, headings, data }) => {

  return (
    <StyledTable>
      <TableHeading>
        <TableRow>
          <TableHead colSpan={headings.length + 1}>
            <TableTitle>{title}</TableTitle>
          </TableHead>
        </TableRow>
      </TableHeading>
      <TableContent>
        <TableRow>
          {headings?.map((heading, i) => (
            <TableCell key={i}>{heading}</TableCell>
          ))}
        </TableRow>
        {data.map((row) => (
          <TableRow key={row}>
            {row.map((tableData, i) => (
              <TableCell key={i}>{tableData}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableContent>
    </StyledTable>
  );
};
