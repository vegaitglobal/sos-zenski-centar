import { InfoCard } from '../../molecules/InfoCard/InfoCard';
import { categoryData } from '../FormsLayout/FormsLayout';
import {
  StyledClientInfo,
  StyledSidebar,
  StyledCardContainer,
} from './ClientInfo.styles';

export const ClientInfo = (props) => {
  return (
    <StyledClientInfo {...props}>
      <StyledSidebar></StyledSidebar>
      <StyledCardContainer>
        {categoryData.questions.map(
          ({ label, id, options, condition, icon }) => (
            <InfoCard
              key={id}
              label={label}
              id={id}
              options={options}
              condition={condition}
              icon={icon}
            />
          ),
        )}
      </StyledCardContainer>
    </StyledClientInfo>
  );
};
