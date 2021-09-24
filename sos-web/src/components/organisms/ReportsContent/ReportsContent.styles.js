import { rgba } from 'polished';
import styled from 'styled-components';
import { Heading } from '../../atoms/Heading/Heading';

export const StyledReportsContent = styled.div`
  padding: 40px 0;
  background-color: ${({ theme }) => rgba(theme.color.greyLighter, 0.3)};
  border-radius: 20px 0px 0px 20px;
  height: 100%;
  flex-grow: 1;
`;

export const StyledHeading = styled(Heading)`
  position: relative;
  color: ${({ theme }) => theme.color.purple};

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 2px;
    width: 40px;
    background-color: ${({ theme }) => theme.color.purple};
  }

  span {
    color: ${({ theme }) => theme.color.purpleLight};
  }
`;
