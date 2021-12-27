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
  const { setData, data } = useDataContext();
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
    fetchData();
  }, [fetchData, setDate]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = {
    margin: 1,
    filename: 'evidencija' + date.start + '/' + date.end + '.pdf',
    image: {
      type: 'jpeg',
      quality: 0.98,
    },
    html2canvas: {
      scale: 1,
    },
    jsPDF: {
      unit: 'in',
      format: 'letter',
      orientation: 'portrait',
    },
  };

  function handleChartUserNumber() {
    if (data.charts) {
      return data.charts[0].data
        .map((item) => {
          return item.label + ': ' + item.level + '<br>';
        })
        .join('');
    }
  }

  function handleChartUserGroup() {
    if (data.charts) {
      return data.charts[1].data
        .map((item) => {
          return item.label + ': ' + item.level + '<br>';
        })
        .join('');
    }
  }

  function handleChartTableGroup() {
    if (data.tables) {
      let text = '';
      for (let i = 1; i <= data.tables[0].data[0].data[0].length - 1; i++) {
        text +=
          data.tables[0].data[0].headings[i] +
          ': ' +
          data.tables[0].data[0].data[0][i] +
          '<br>';
      }
      return text;
    }
  }

  function handleChartTableRelationship() {
    if (data.tables) {
      let text = '';
      for (let i = 1; i <= data.tables[1].data[0].headings.length - 1; i++) {
        text +=
          data.tables[1].data[0].headings[i] +
          ': ' +
          data.tables[1].data[0].data[0][i] +
          ' ' +
          data.tables[1].data[0].data[0][i] +
          '%' +
          '<br>';
      }
      return text;
    }
  }

  var strr = '<html><head><title>Sheet</title>';
  strr += '</head><body>';
  strr +=
    '<div #ccc!important;padding:0.5rem 1.5rem 1.5rem 0.5rem;margin-top:1.5rem">' +
    'Evidencija od: ' +
    date.start +
    ' do: ' +
    date.end +
    '</div>';
  strr +=
    '<div style="border:0.1rem solid #ccc!important;padding:0.5rem 1.5rem 0.5rem 1.5rem;margin-top:1.5rem">' +
    '<div style="#ccc!important;padding:0.5rem 0rem 0.5rem 0rem">Broj Korisnika/ca po uslugama:</div>' +
    handleChartUserNumber() +
    '</div>';
  strr +=
    '<div style="border:0.1rem solid #ccc!important;padding:0.5rem 1.5rem 0.5rem 1.5rem;margin-top:1.5rem">' +
    '<div style="#ccc!important;padding:0.5rem 0rem 0.5rem 0rem">Pripadnost marginalizovanim grupama:</div>' +
    handleChartUserGroup() +
    '</div>';
  strr +=
    '<div style="border:0.1rem solid #ccc!important;padding:0.5rem 1.5rem 0.5rem 1.5rem;margin-top:1.5rem">' +
    '<div style="#ccc!important;padding:0.5rem 0rem 0.5rem 0rem">Broj klijentkinja i klijenata sa iskustvom nasilja po uslugama:</div>' +
    handleChartTableGroup() +
    '</div>';
  strr +=
    '<div style="border:0.1rem solid #ccc!important;padding:0.5rem 1.5rem 0.5rem 1.5rem;margin-top:1.5rem">' +
    '<div style="#ccc!important;padding:0.5rem 0rem 0.5rem 0rem"> Odnos žrtve sa nasilnikom:</div>' +
    handleChartTableRelationship() +
    '</div>';
  strr += '</body></html>';

  function handleDownload() {
    // eslint-disable-next-line no-undef
    html2pdf().from(strr).set(options).save();
  }

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
