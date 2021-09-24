import { Container } from '../../layout/Container';
import { StyledHeading, StyledShell } from './Shell.styles';

export const Shell = ({ title, backgroundColor, children, ...props }) => {
  return (
    <StyledShell $backgroundColor={backgroundColor} {...props}>
      <Container>
        <StyledHeading type="h2">
          Evidencija usluga 2021/ <span>{title}</span>
        </StyledHeading>
        {children}
      </Container>
    </StyledShell>
  );
};
