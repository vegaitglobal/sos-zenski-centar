import { StyledForms } from './Forms.styles';
import { FormsLayout } from '../organisms/FormsLayout/FormsLayout';
import { NewEntryContextProvider } from '../../hooks/useNewEntryContext';

export const Forms = () => {
  return (
    <StyledForms>
      <NewEntryContextProvider>
        <FormsLayout />
      </NewEntryContextProvider>
    </StyledForms>
  );
};
