import { useCallback, useEffect } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { getLastMonth } from '../../../utils/date';
import { useDataContext } from '../../../utils/store';
import { DatePicker } from '../../atoms/DatePicker/DatePicker';
import { Button } from '../../molecules/Button/Button';
import { StyledGrid } from './DownloadReportContent.styles';
import { useReportContext } from '../../../hooks/useReportContext';
import { baseUrl } from '../../../utils/apiUrl';

export const DownloadReport = () => {
  const { setData } = useDataContext();
  const { sendRequest, isLoading } = useFetch();
  const { date, setDate } = useReportContext();

  const fetchData = useCallback(
    async (start = date.start, end = date.end) => {
      const { firstDay, lastDay } = getLastMonth();

      const graphResponse = await sendRequest(
        `${baseUrl}/api/ReportGraphs?from=${start || firstDay}&to=${
          end || lastDay
        }`,
      );

      const tableResponse = await sendRequest(
        `${baseUrl}/api/ReportTables?from=${start || firstDay}&to=${
          end || lastDay
        }`,
      );

      setData({
        charts: graphResponse,
        tables: tableResponse,
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
    fetchData();
  }, [fetchData]);

  const handleLastMonth = useCallback(() => {
    const { firstDay, lastDay } = getLastMonth();

    setDate({ start: firstDay, end: lastDay });
    fetchData(firstDay, lastDay);
  }, [fetchData, setDate]);

  const handleDownload = useCallback(async () => {
    sendRequest(`${baseUrl}/api/ReportTables/export?from=${date.start}&to=${date.end}`, true)
      .catch(err => console.log(err.message));
  }, [date.start, date.end, sendRequest])

  useEffect(() => {
    fetchData();
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
        <Button onClick={handleDownload}>Download</Button>
      </div>
    </StyledGrid>
  );
};
