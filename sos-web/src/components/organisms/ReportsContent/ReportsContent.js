import { rgba } from 'polished';
import { theme } from '../../../styles/config/theme';
import { Accordion } from '../../molecules/Accordion/Accordion';
import { Table } from '../../molecules/Table/Table';
import { Panel } from '../../molecules/Panel/Panel';
import { BarChart } from '../BarChart/BarChart';
import { DoughnutChart } from '../DoughnutChart/DoughnutChart';
import { Shell } from '../Shell/Shell';
import { StyledGrid } from './ReportsContent.styles';
import { DownloadReport } from './DownloadReportContent';
import { useFetch } from '../../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { useDataContext } from '../../../utils/store';
import { getLastMonth } from '../../../utils/date';
import { useReportContext } from '../../../hooks/useReportContext';

export const ReportsContent = () => {
  const { data } = useDataContext();
  const { sendRequest } = useFetch();
  const [tables, setTables] = useState([]);
  const [barChart, doughnatChart] = data?.charts ?? [];
  const { date } = useReportContext();

  useEffect(() => {
    const fetch = async () => {
      const { firstDay, lastDay } = getLastMonth();

      const response = await sendRequest(
        `https://api.sos.sitesstage.com/api/ReportTables?from=${
          date.start || firstDay
        }&to=${date.end || lastDay}`,
      );

      setTables(response);
    };

    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendRequest]);

  return (
    <Shell
      backgroundColor={rgba(theme.color.greyLighter, 0.3)}
      title="Izveštaj"
    >
      <Accordion title="1. Vremenski period" defaultOpened>
        <DownloadReport />
      </Accordion>
      <Accordion title="2. Opšti podaci" defaultOpened>
        <StyledGrid>
          <Panel title={barChart?.label}>
            <BarChart chartData={barChart?.data ?? []} />
          </Panel>
          <Panel title={doughnatChart?.label}>
            <DoughnutChart chartData={doughnatChart?.data ?? []} />
          </Panel>
        </StyledGrid>
      </Accordion>
      <Accordion title="3. Obraćanje zbog nasilja - broj klijenata i klijentkinja">
        {tables?.map(({ title, data }) => (
          <Table key={title} title={title} tableData={data} />
        ))}
      </Accordion>
    </Shell>
  );
};
