import { useCallback, useEffect, useState } from 'react';
import { BASE_URL, useFetch } from '../../../hooks/useFetch';
import { getLastMonth } from '../../../utils/date';
import { getToken } from '../../../utils/isAuthenticated';
import { useDataContext } from '../../../utils/store';
import { DatePicker } from '../../atoms/DatePicker/DatePicker';
import { Button } from '../../molecules/Button/Button';
import { StyledGrid } from './DownloadReportContent.styles';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`,
};

export const DownloadReport = () => {
  const { setData } = useDataContext();
  const { sendRequest } = useFetch();
  const [date, setDate] = useState({
    start: '',
    end: '',
  });

  const fetchGraphs = useCallback(
    async (start = date.start, end = date.end) => {
      const { firstDay, lastDay } = getLastMonth();

      const response = await sendRequest(
        `${BASE_URL}/ReportGraphs?from=${start || firstDay}&to=${
          end || lastDay
        }`,
        'GET',
        headers,
      );

      setData({
        charts: response,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sendRequest, date.start, date.end],
  );

  const handleOnChange = useCallback(({ target }) => {
    setDate((previousState) => ({
      ...previousState,
      [target.name]: target.value,
    }));
  }, []);

  const handleCustomDate = useCallback(() => {
    fetchGraphs();
  }, [fetchGraphs]);

  const handleLastMonth = useCallback(() => {
    const { firstDay, lastDay } = getLastMonth();

    fetchGraphs(firstDay, lastDay);
  }, [fetchGraphs]);

  useEffect(() => {
    fetchGraphs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledGrid>
      <div>
        <Button onClick={handleLastMonth}>Prošli mesec</Button>
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
        <Button onClick={handleCustomDate}>Izaberi</Button>
      </div>
      <div>
        <Button>Download</Button>
      </div>
    </StyledGrid>
  );
};
