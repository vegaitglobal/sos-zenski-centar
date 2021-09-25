import { color } from '../../../styles/config/theme';
import { Accordion } from '../../molecules/Accordion/Accordion';
import { Categories } from '../Categories/Categories';
import { ClientInfo } from '../ClientInfo/ClientInfo';
import {
  StyledShell,
  StyledContainer,
  StyledColumn,
  StyledAccordion,
} from './FormsLayout.styles';

export const FormsLayout = () => {
  return (
    <StyledShell
      backgroundColor={color.pinkLight}
      title="Evidentiraj novi poziv"
    >
      <Categories />
      <StyledContainer>
        <StyledColumn>
          <StyledAccordion title="Informacije o klijentu" isClickable={false}>
            <ClientInfo />
          </StyledAccordion>
          <Accordion isReverse title="Intervencije SOS Ženskog Centra">
            <div style={{ height: '50px' }}></div>
          </Accordion>
        </StyledColumn>
        <StyledColumn>
          <StyledAccordion title="Opis usluga" isClickable={false}>
            2
          </StyledAccordion>
        </StyledColumn>
      </StyledContainer>
    </StyledShell>
  );
};
