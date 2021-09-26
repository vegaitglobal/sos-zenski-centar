import { useEffect } from 'react';

import { color } from '../../../styles/config/theme';
import { useCategoryContext } from '../../../hooks/useCategoryContext';
import { Loader } from '../../atoms/Loader/Loader';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { Accordion } from '../../molecules/Accordion/Accordion';
import { ClientInfo } from '../ClientInfo/ClientInfo';
import {
  StyledShell,
  StyledContainer,
  StyledColumn,
  StyledAccordion,
  StyledQuestion,
  StyledGrid,
  StyledButton,
  StyledButtonHolder,
} from './FormsLayout.styles';
import { useNewEntryContext } from '../../../hooks/useNewEntryContext';

export const FormsLayout = () => {
  const { selectedCategory } = useCategoryContext();
  const { initialize, submit, actionInfo } = useNewEntryContext();

  useEffect(() => {
    initialize(selectedCategory);
  }, [initialize, selectedCategory]);

  return (
    <StyledShell
      backgroundColor={color.pinkLight}
      title={selectedCategory?.label}
    >
      <StyledContainer>
        <StyledColumn>
          <ClientInfo />

          <Accordion isReverse title="Intervencije SOS Ženskog Centra">
            <StyledGrid>
              {(actionInfo.questions || []).map(
                ({ label, id, options, condition }) => (
                  <StyledQuestion
                    key={id}
                    label={label}
                    id={id}
                    options={options}
                    condition={condition}
                  />
                ),
              )}
            </StyledGrid>
            <StyledButtonHolder>
              {
                /*error*/ false && (
                  <Paragraph type="small">
                    Čuvanje nije uspelo. Pokušajte ponovo
                  </Paragraph>
                )
              }
              {
                /*isLoading*/ false ? (
                  <Loader />
                ) : (
                  <StyledButton onClick={submit}>Sačuvaj</StyledButton>
                )
              }
            </StyledButtonHolder>
          </Accordion>
        </StyledColumn>
        <StyledColumn>
          <StyledAccordion title={actionInfo.sectionName} isClickable={false}>
            {(actionInfo.questions || []).map(
              ({ label, id, options, condition }) => (
                <StyledQuestion
                  key={id}
                  label={label}
                  id={id}
                  options={options}
                  condition={condition}
                />
              ),
            )}
          </StyledAccordion>
        </StyledColumn>
      </StyledContainer>
    </StyledShell>
  );
};
