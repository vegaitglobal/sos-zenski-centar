import { useNewEntryContext } from '../../../hooks/useNewEntryContext';
import { StyledAccordion, StyledQuestion } from './ServicePanel.styles';

export const ServicePanel = () => {
  const { serviceInfo } = useNewEntryContext();

  return (
    <StyledAccordion title={serviceInfo.sectionName} isClickable={false}>
      {serviceInfo.questions.map(({ label, id, options, condition }) => (
        <StyledQuestion
          key={id}
          label={label}
          id={id}
          options={options}
          condition={condition}
        />
      ))}
    </StyledAccordion>
  );
};
