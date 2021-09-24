import { ReportsContent } from '../organisms/ReportsContent/ReportsContent';
import { StyledReports } from './Reports.styles';

export const Reports = () => {
  return (
    <>
      {/* Mock sidebar */}
      <StyledReports>
        <div style={{ width: '102px' }}></div>
        <ReportsContent />
      </StyledReports>
    </>
  );
};
