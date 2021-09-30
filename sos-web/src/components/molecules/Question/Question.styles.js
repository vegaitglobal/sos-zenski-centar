import styled from 'styled-components';
import { typeStyle } from '../../../styles/config/typeStyles';

export const StyledQuestion = styled.div``;

export const QuestionTitle = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.purple};
  margin-bottom: 20px;
  ${typeStyle.h4};
  font-weight: 700;
`;
