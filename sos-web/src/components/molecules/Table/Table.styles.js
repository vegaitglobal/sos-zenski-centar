import styled from 'styled-components';

export const StyledTable = styled.table`
  color: ${({ theme }) => theme.color.purple};
  width: 100%;
  border-radius: 12px;
  border-collapse: collapse;
  overflow: hidden;
  margin-bottom: 30px;
`;

export const TableHeading = styled.thead`
  height: 37px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.purple};
`;

export const TableTitle = styled.h3`
  padding: 10px;
  color: ${({ theme }) => theme.color.orangeLight};
`;

export const TableContent = styled.tbody`
  font-size: 12px;
  font-weight: 600;
`;

export const TableRow = styled.tr`
  border-top: 0.005rem solid ${({ theme }) => theme.color.greyLighter1};
`;

export const TableHead = styled.th``;

export const TableCell = styled.td`
  width: 54px;
  height: 42px;
  padding: 10px 14px;
  text-align: center;
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.color.white};
  }
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.color.purpleLight1};
  }
`;
