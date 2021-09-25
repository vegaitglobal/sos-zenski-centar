import styled from 'styled-components';
import { Container } from '../layout/Container';
import { color } from '../../styles/config/theme';
import { Shell } from '../organisms/Shell/Shell';

export const StyledForms = styled.section`
  height: 100%;
`;

export const StyledShell = styled(Shell)`
  height: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const StyledLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 0 0 60%;
`;

export const StyledRight = styled.div`
  height: 100%;
  flex: 0 0 40%;
`;

export const StyledCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 50px 100px 50px 0;
  background-color: ${color.purple};
`;
