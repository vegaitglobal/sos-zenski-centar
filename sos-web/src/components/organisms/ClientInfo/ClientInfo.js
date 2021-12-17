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
            />
          ))}
        </StyledCardContainer>
      </StyledClientInfo>
    </StyledAccordion>
  );
};
