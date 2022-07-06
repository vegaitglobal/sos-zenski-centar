import { useNewEntryContext } from '../../../hooks/useNewEntryContext';
import { useMemo } from 'react';
import { useDataContext } from '../../../utils/store';
import { InfoCard } from '../../molecules/InfoCard/InfoCard';
import {
  StyledClientInfo,
  StyledSidebar,
  StyledSidebarButton,
  StyledCardContainer,
  StyledAccordion,
} from './ClientInfo.styles';
import { baseUrl } from '../../../utils/apiUrl';

const multipleAnswersQuestion = [
  '657a5fd3-d9a9-4d61-a392-a54caefd4bb6',
  '146a9993-70df-4e2c-8cad-4e1c3aee1377',
  '0c465680-db66-428e-ac6b-6a1754e178ef',
  'cf6c7d5e-0c99-41e0-aa26-113ee257b70f',
  '56cb349a-b7bd-4825-9e29-6ffd6c383ab8',

  '54e9af82-6c54-4851-ac00-9ee68d05abac',

  '01cb293b-d67c-4204-a92a-85dfee4b13f5',
];

export const ClientInfo = (props) => {
  const { callerInfo } = useNewEntryContext();
  const { data, setData } = useDataContext();

  const selected = useMemo(
    () => callerInfo.questions.filter(({ id }) => data[id]),
    [data, callerInfo.questions],
  );
  const notSelected = useMemo(
    () => callerInfo.questions.filter(({ id }) => !data[id]),
    [data, callerInfo.questions],
  );

  const handleSidebarButtonClick = (id) => {
    setData({
      ...data,
      [id]: undefined,
    });
  };

  return (
    <StyledAccordion
      $noPadding
      title={callerInfo.sectionName}
      isClickable={false}
    >
      <StyledClientInfo {...props}>
        <StyledSidebar>
          {selected.map(({ id, icon, label }) => {
            return (
              <StyledSidebarButton
                key={id}
                onClick={() => handleSidebarButtonClick(id)}
              >
                <img src={`${baseUrl}/${icon}`} alt={label} />
                <span>{label}</span>
              </StyledSidebarButton>
            );
          })}
        </StyledSidebar>
        <StyledCardContainer>
          {notSelected.map(({ label, id, options, condition, icon }) => (
            <InfoCard
              key={id}
              label={label}
              id={id}
              options={options}
              condition={condition}
              icon={icon}
              multipleAnswers={
                multipleAnswersQuestion.includes(id) ? true : false
              }
            />
          ))}
        </StyledCardContainer>
      </StyledClientInfo>
    </StyledAccordion>
  );
};
