import styled from 'styled-components';
import { color } from '../../../styles/config/theme';

export const StyledReportsContent = styled.div``;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;

  & > div:not(:last-child) {
    border-right: 1px solid ${color.purple};
  }
  & > div {
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
