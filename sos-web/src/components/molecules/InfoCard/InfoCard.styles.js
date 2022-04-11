import { hideVisually } from 'polished';
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/config/theme';
import { typeStyle } from '../../../styles/config/typeStyles';
import {
  StyledFormControl,
  StyledLabelText,
  StyledRadio,
} from '../Radio/Radio.styles';

export const StyledInfoCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${theme.color.pinkLight};
  border-radius: 12px;
  padding: 12px 12px 0;
  color: ${theme.color.purple};

  & img,
  & svg {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 12px;
  }

  ${({ $hasDropdown }) =>
    $hasDropdown
      ? css`
          padding: 12px 12px 42px;
          ${StyledDropdown} {
            position: absolute;
            top: calc(100% + 12px);
            width: 250px;
            background-color: ${theme.color.pinkLight};
            padding: 16px 12px;
            border-radius: 12px;
            box-shadow: ${theme.boxShadow.default};
            z-index: 1;
          }
        `
      : css`
          ${StyledDropdown} {
            display: flex;
            width: calc(100% + 24px);
            margin: 12px -12px 0;
          }
          ${StyledFormControl} {
            width: 50%;
            border-color: ${theme.color.purple};
            border-style: solid;
            margin: 0;
            overflow: hidden;
            &:hover {
              background-color: ${theme.color.purple};
              ${StyledLabelText} {
                color: ${theme.color.white};
              }
            }
            &:first-of-type {
              border-radius: 0 0 0 12px;
              border-width: 2px 1px 2px 2px;
            }
            &:last-of-type {
              border-radius: 0 0 12px 0;
              border-width: 2px 2px 2px 1px;
            }
          }
          ${StyledLabelText} {
            display: block;
            padding: 0 5px;
            text-align: center;
            font-weight: bold;
            color: ${theme.color.purple};
            &::before,
            &::after {
              display: none;
            }
          }
          ${StyledRadio} {
            &:checked {
              ~ ${StyledLabelText} {
                background: ${theme.color.purple};
                color: ${theme.color.pinkLight};
              }
            }
          }
        `}
`;

export const StyledSpan = styled.span`
  display: block;
  ${typeStyle.medium};
  margin: auto 0;
  text-align: center;
  font-weight: bold;
`;

export const StyledCardContainer = styled.div`
  min-width: 160px;
`;

export const StyledDropdown = styled.div``;

export const StyledArrow = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  color: ${theme.color.purple};

  & span {
    ${hideVisually()};
  }
  & svg {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
  }
`;
