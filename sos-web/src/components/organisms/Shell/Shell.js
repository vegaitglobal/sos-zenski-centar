import { Icon } from '../../atoms/Icon/Icon';
import { Container } from '../../layout/Container';
import {
  StyledTop,
  StyledClose,
  StyledHeading,
  StyledShell,
} from './Shell.styles';

export const Shell = ({ title, backgroundColor, children, ...props }) => {
  return (
    <StyledShell $backgroundColor={backgroundColor} {...props}>
      <Container>
        <StyledTop>
          <StyledHeading type="h2">
            Evidencija usluga 2021/ <span>{title}</span>
          </StyledHeading>
          <StyledClose href="/">
            <Icon.Close />
          </StyledClose>
        </StyledTop>
        {children}
      </Container>
    </StyledShell>
  );
};
