import { rgba } from 'polished';
import { theme } from '../../../styles/config/theme';
import { Accordion } from '../../molecules/Accordion/Accordion';
import { Shell } from '../Shell/Shell';

export const ReportsContent = () => {
  return (
    <Shell
      backgroundColor={rgba(theme.color.greyLighter, 0.3)}
      title="Izveštaj"
    >
      <Accordion title="1. Opšti podaci">
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </Accordion>
      <Accordion title="2. Obraćanje zbog nasilja - broj klijenata i klijentkinja"></Accordion>
    </Shell>
  );
};
