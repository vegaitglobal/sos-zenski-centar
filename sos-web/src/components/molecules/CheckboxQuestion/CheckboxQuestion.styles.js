import { hideVisually, size } from 'polished';
import styled from 'styled-components';
import { typeStyle } from '../../../styles/config/typeStyles';

export const StyledFormControl = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  color: ${({ theme }) => theme.color.grey};
  cursor: pointer;
  padding: 10px 0;
`;

export const StyledLabelText = styled.span`
  ${typeStyle.medium};
  padding-left: 40px;
  position: relative;
  display: inline-block;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    border-radius: 50%;
  }

  &::before {
    ${size('22px')};
    left: 0;
    transform: translateY(-50%);
    border: 1px solid ${({ theme }) => theme.color.grey};
    transition: border-color 0.2s ease-in-out;
  }

  &::after {
    ${size('12px')};
    left: 5px;
    background-color: ${({ theme }) => theme.color.purpleLight};
    transform: translateY(-50%) scale(0);
    transition: transform 0.1s ease-in-out;
  }
`;

export const StyledCheckbox = styled.input`
  ${hideVisually()};

  &:checked {
    ~ ${StyledLabelText} {
      &::before {
        border-color: ${({ theme }) => theme.color.purpleLight};
      }
      &::after {
        transform: translateY(-50%) scale(1);
      }
    }
  }
  &:hover {
    ~ ${StyledLabelText} {
      &::before {
        border-color: ${({ theme }) => theme.color.purpleLight};
      }
    }
  }
`;
