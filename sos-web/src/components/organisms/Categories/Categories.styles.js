import { hideVisually, rgba } from 'polished';
import styled from 'styled-components';
import { typeStyle } from '../../../styles/config/typeStyles';

export const StyledCategories = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 1440px) {
    margin-bottom: 15px;
  }
`;

export const StyledItem = styled.li`
  margin-bottom: 16px;

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const StyledLabel = styled.label`
  cursor: pointer;
`;

export const StyledLabelText = styled.span`
  ${typeStyle.medium};
  display: inline-block;
  padding: 14px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 12px;
  transition: 0.2s ease-in-out;
  transition-property: color, background-color;

  &:hover {
    background-color: ${({ theme }) => rgba(theme.color.pink, 0.2)};
  }
`;

export const StyledInput = styled.input`
  ${hideVisually()};

  &:checked ~ ${StyledLabelText} {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.purple};
  }
`;
