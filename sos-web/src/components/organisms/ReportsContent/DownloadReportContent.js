import { useState } from 'react';
import { DatePicker } from '../../atoms/DatePicker/DatePicker';
import { Button } from '../../molecules/Button/Button';
import { StyledGrid } from './DownloadReportContent.styles';

export const DownloadReport = () => {
  const [date, setDate] = useState(new Date().toISOString());

  const handleOnChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <StyledGrid>
      <div>
        <Button>Prošli mesec</Button>
      </div>
      <div>
        <DatePicker label="Od:" value={date} onChange={handleOnChange} />
        <DatePicker label="Do:" value={date} onChange={handleOnChange} />
        <Button>Izaberi</Button>
      </div>
      <div>
        <Button>Download</Button>
      </div>
    </StyledGrid>
  );
};
