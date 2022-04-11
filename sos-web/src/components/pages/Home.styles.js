import styled from 'styled-components';
import { theme } from '../../styles/config/theme';
import { Container } from '../layout/Container/Container';

export const StyledHome = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${theme.color.pinkLight};
`;

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: stretch;
  height: 100%;
  width: 100%;
`;
