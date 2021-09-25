import styled from 'styled-components';

export const StyledReportsContent = styled.div``;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;

  div:not(:last-child) {
    border-right: 1px solid red;
  }
`;
