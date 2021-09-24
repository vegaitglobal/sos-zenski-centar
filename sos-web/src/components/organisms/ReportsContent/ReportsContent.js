import { Container } from '../../layout/Container';
import { StyledReportsContent, StyledHeading } from './ReportsContent.styles';

export const ReportsContent = (props) => {
  return (
    <StyledReportsContent {...props}>
      <Container>
        <StyledHeading type="h2">
          Evidencija usluga 2021/ <span>Izveštaj</span>
        </StyledHeading>
      </Container>
    </StyledReportsContent>
  );
};
