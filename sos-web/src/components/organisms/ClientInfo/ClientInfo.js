import { useNewEntryContext } from '../../../hooks/useNewEntryContext';
import { InfoCard } from '../../molecules/InfoCard/InfoCard';
import {
  StyledClientInfo,
  StyledSidebar,
  StyledCardContainer,
  StyledAccordion,
} from './ClientInfo.styles';

export const ClientInfo = (props) => {
  const { callerInfo } = useNewEntryContext();

  return (
    <StyledAccordion
      $noPadding
      title={callerInfo.sectionName}
      isClickable={false}
    >
      <StyledClientInfo {...props}>
        <StyledSidebar></StyledSidebar>
        <StyledCardContainer>
          {callerInfo.questions.map(
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
    </StyledAccordion>
  );
};
