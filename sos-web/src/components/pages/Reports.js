import { ReportContextProvider } from '../../hooks/useReportContext';
import { ReportsContent } from '../organisms/ReportsContent/ReportsContent';
import { StyledReports } from './Reports.styles';

export const Reports = () => {
  return (
    <StyledReports>
      <ReportContextProvider>
        <ReportsContent />
      </ReportContextProvider>
    </StyledReports>
  );
};
