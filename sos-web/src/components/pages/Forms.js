import {
  StyledForms,
  StyledContainer,
  StyledCategory,
  StyledShell,
  StyledLeft,
  StyledRight,
} from './Forms.styles';
import { color } from '../../styles/config/theme';

export const Forms = () => {
  return (
    <StyledForms>
      <StyledShell
        backgroundColor={color.pinkLight}
        title="Evidentiraj novi poziv"
      >
        <StyledCategory />
        <StyledContainer>
          <StyledLeft>1</StyledLeft>
          <StyledRight>2</StyledRight>
        </StyledContainer>
      </StyledShell>
    </StyledForms>
  );
};
