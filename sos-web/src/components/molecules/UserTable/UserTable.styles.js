import styled from 'styled-components';
import { boxShadow, color } from '../../../styles/config/theme';
import { typeStyle } from '../../../styles/config/typeStyles';

export const StyledUserTable = styled.table`
  ${typeStyle.large};
  position: relative;
  width: 100%;
  padding-bottom: 24px;
  font-weight: bold;
  border-spacing: 10px;

  tr {
    text-align: left;
  }

  td,
  th {
    padding: 10px;

    span {
      display: flex;
      align-items: center;

      svg {
        margin-left: 8px;
        fill: ${color.grey};
      }
    }
  }
`;

export const StyledTableRow = styled.tr`
  border-radius: 5px;
  box-shadow: ${boxShadow.default};
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 2px;
    width: 24px;
    height: 24px;
    margin-left: 10px;
    border-radius: 5px;
    background-color: ${(props) => color[props.background] || color.purple};

    svg {
        fill: ${color.white};
    }
`;
