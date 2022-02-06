import styled from 'styled-components';
import { color } from '../../../styles/config/theme';
import { customScrollBar } from '../../../styles/helpers/customScrollbar';
import { StyledHeading } from '../../atoms/Heading/Heading.styles';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: ${color.blackFaded};
  z-index: 10;

  ${StyledHeading} {
    margin: 32px 0;

    span {
      display: block;
      margin: 5px 0;
      font-weight: 400;

      &:first-of-type {
        margin-top: 20px;
      }
    }
  }
`;

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  padding: 32px;
  border-radius: 12px;
  background: ${color.white};
  overflow-y: auto;
  max-height: 100%;
  ${customScrollBar()};
`;

export const StyledClose = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  color: ${color.purple};

  svg {
    pointer-events: none;
  }
`;
