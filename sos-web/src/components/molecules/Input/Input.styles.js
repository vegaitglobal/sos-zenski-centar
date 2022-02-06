import styled from 'styled-components';
import { typeStyle } from '../../../styles/config/typeStyles';

export const StyledInput = styled.input`
  ${typeStyle.large};
  width: 100%;
  padding: 11px;
  border-radius: 5px;
  border: 1px solid ${({ theme, valid, touched }) => (!valid && touched) ? theme.color.red : theme.color.greyLight};
  background-color: ${({ theme }) => theme.color.greyLightest};

  &:disabled {
    opacity: 0.5;
  }
`;

export const StyledFormRow = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  color: ${({ theme, valid, touched }) => (!valid && touched) ? theme.color.red : theme.color.grey};
  margin-bottom: 6px;
`;

export const StyledText = styled.span`
  ${typeStyle.medium};
  display: block;
  margin-top: 10px;
`;
