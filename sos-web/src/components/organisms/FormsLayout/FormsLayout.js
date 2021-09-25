import { color } from '../../../styles/config/theme';
import { Accordion } from '../../molecules/Accordion/Accordion';
import {
  StyledShell,
  StyledCategory,
  StyledContainer,
  StyledLeft,
  StyledRight,
  StyledAccordion,
} from './FormsLayout.styles';

export const FormsLayout = () => {
  return (
    <StyledShell
      backgroundColor={color.pinkLight}
      title="Evidentiraj novi poziv"
    >
      <StyledCategory />
      <StyledContainer>
        <StyledLeft>
          <StyledAccordion title="Informacije o klijentu" isClickable={false}>
            1
          </StyledAccordion>
          <Accordion isReverse title="Intervencije SOS Ženskog Centra">
            3
          </Accordion>
        </StyledLeft>
        <StyledRight>
          <StyledAccordion title="Opis usluga" isClickable={false}>
            2
          </StyledAccordion>
        </StyledRight>
      </StyledContainer>
    </StyledShell>
  );
};
