import { Icon } from '../../atoms/Icon/Icon';
import { Container } from '../../layout/Container/Container';
import {
  StyledTop,
  StyledClose,
  StyledHeading,
  StyledShell,
} from './Shell.styles';

export const Shell = ({ title, backgroundColor, children, ...props }) => {
  const year = new Date().getFullYear();

  return (
    <StyledShell $backgroundColor={backgroundColor} {...props}>
      <Container>
        <StyledTop>
          <StyledHeading type="h2">
            Evidencija usluga {year} / <span>{title}</span>
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
