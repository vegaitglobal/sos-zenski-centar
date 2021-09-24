import { rgba } from 'polished';
import { theme } from '../../../styles/config/theme';
import { Shell } from '../Shell/Shell';

export const ReportsContent = () => {
  return (
    <Shell
      backgroundColor={rgba(theme.color.greyLighter, 0.3)}
      title="Izveštaj"
    >
      Test
    </Shell>
  );
};
