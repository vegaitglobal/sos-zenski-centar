import { useEffect } from 'react';

import { color } from '../../../styles/config/theme';
import { useCategoryContext } from '../../../hooks/useCategoryContext';

import { ClientInfo } from '../ClientInfo/ClientInfo';
import { ActionPanel } from '../ActionPanel/ActionPanel';
import {
  StyledShell,
  StyledContainer,
  StyledColumn,
} from './FormsLayout.styles';
import { useNewEntryContext } from '../../../hooks/useNewEntryContext';
import { ServicePanel } from '../ServicePanel/ServicePanel';

export const FormsLayout = () => {
  const { selectedCategory } = useCategoryContext();
  const { initialize } = useNewEntryContext();

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
          <ServicePanel />
        </StyledColumn>
      </StyledContainer>
    </StyledShell>
  );
};
