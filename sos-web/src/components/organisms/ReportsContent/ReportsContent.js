import { rgba } from 'polished';
import { theme } from '../../../styles/config/theme';
import { Accordion } from '../../molecules/Accordion/Accordion';
import { Panel } from '../../molecules/Panel/Panel';
import { BarChart } from '../BarChart/BarChart';
import { DoughnutChart } from '../DoughnutChart/DoughnutChart';
import { Shell } from '../Shell/Shell';
import { StyledGrid } from './ReportsContent.styles';

export const ReportsContent = () => {
  return (
    <Shell
      backgroundColor={rgba(theme.color.greyLighter, 0.3)}
      title="Izveštaj"
    >
      <Accordion title="1. Opšti podaci">
        <StyledGrid>
          <Panel title="1. 1. Broj korisnika/ca po uslugama">
            <BarChart />
          </Panel>
          <Panel title="1.4. Broj klijenata i klijentkinja iz marginalizovanih grupa">
            <DoughnutChart />
          </Panel>
        </StyledGrid>
      </Accordion>
      <Accordion title="2. Obraćanje zbog nasilja - broj klijenata i klijentkinja"></Accordion>
    </Shell>
  );
};
