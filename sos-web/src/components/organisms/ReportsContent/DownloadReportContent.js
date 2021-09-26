import { useState } from 'react';
import { DatePicker } from '../../atoms/DatePicker/DatePicker';
import { Button } from '../../molecules/Button/Button';
import { StyledGrid } from './DownloadReportContent.styles';

export const DownloadReport = () => {
  const [date, setDate] = useState({
    start: '',
    end: '',
  });

  const handleOnChange = ({ target }) => {
    setDate((previousState) => ({
      ...previousState,
      [target.name]: target.value,
    }));
  };

  return (
    <StyledGrid>
      <div>
        <Button>Prošli mesec</Button>
      </div>
      <div>
        <DatePicker
          label="Od:"
          name="start"
          value={date.start}
          onChange={handleOnChange}
        />
        <DatePicker
          label="Do:"
          name="end"
          value={date.end}
          onChange={handleOnChange}
        />
        <Button>Izaberi</Button>
      </div>
      <div>
        <Button>Download</Button>
      </div>
    </StyledGrid>
  );
};
