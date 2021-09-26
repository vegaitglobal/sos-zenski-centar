import { useEffect } from 'react';

import { color } from '../../../styles/config/theme';
import { useCategoryContext } from '../../../hooks/useCategoryContext';

import { ClientInfo } from '../ClientInfo/ClientInfo';
import { ActionPanel } from '../ActionPanel/ActionPanel';
import {
  StyledShell,
  StyledContainer,
  StyledColumn,
  StyledAccordion,
  StyledQuestion,
} from './FormsLayout.styles';
import { useNewEntryContext } from '../../../hooks/useNewEntryContext';

export const FormsLayout = () => {
  const { selectedCategory } = useCategoryContext();
  const { initialize, actionInfo } = useNewEntryContext();

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

          <ActionPanel />
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
