import { useCallback, useEffect } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { getLastMonth } from '../../../utils/date';
import { useDataContext } from '../../../utils/store';
import { DatePicker } from '../../atoms/DatePicker/DatePicker';
import { Button } from '../../molecules/Button/Button';
import { StyledGrid } from './DownloadReportContent.styles';
import { useReportContext } from '../../../hooks/useReportContext';

export const DownloadReport = () => {
  const { setData } = useDataContext();
  const { sendRequest, isLoading } = useFetch();
  const { date, setDate } = useReportContext();

  const fetchGraphs = useCallback(
    async (start = date.start, end = date.end) => {
      const { firstDay, lastDay } = getLastMonth();

      const response = await sendRequest(
        `https://api.sos.sitesstage.com/api/ReportGraphs?from=${
          start || firstDay
        }&to=${end || lastDay}`,
      );

      setData({
        charts: response,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sendRequest, date.start, date.end],
  );

  const handleOnChange = useCallback(
    ({ target }) => {
      setDate((previousState) => ({
        ...previousState,
        [target.name]: target.value,
      }));
    },
    [setDate],
  );

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
        <Button disabled={isLoading} onClick={handleLastMonth}>
          Prošli mesec
        </Button>
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
        <Button
          disabled={isLoading || !date.end || !date.start}
          onClick={handleCustomDate}
        >
          Izaberi
        </Button>
      </div>
      <div>
        <Button>Download</Button>
      </div>
    </StyledGrid>
  );
};
