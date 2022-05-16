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
import { useDataContext } from '../../../utils/store';

export const ReportsContent = () => {
  const { data } = useDataContext();
  const [barChart, doughnatChart] = data?.charts ?? [];
  const tables = data?.tables ?? [];

  return (
    <Shell
      backgroundColor={rgba(theme.color.greyLighter, 0.3)}
      title="Izveštaj"
    >
      <Accordion title="Vremenski period" defaultOpened>
        <DownloadReport />
      </Accordion>
      <Accordion title="Vizuelni prikaz" defaultOpened>
        <StyledGrid>
          <Panel title={barChart?.label}>
            <BarChart chartData={barChart?.data ?? []} />
          </Panel>
          <Panel title={doughnatChart?.label}>
            <DoughnutChart chartData={doughnatChart?.data ?? []} />
          </Panel>
        </StyledGrid>
      </Accordion>
      {tables?.map(({title, tables}) => <Accordion title={title} key={title}>
        {tables?.map(({ title, headings, data }) => <Table key={title} title={title} headings={headings} data={data} />)}
      </Accordion>)}
    </Shell>
  );
};
