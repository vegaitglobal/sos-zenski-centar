import { useMemo } from 'react';
import { useDataContext } from '../../../utils/store';
import { InfoCard } from '../../molecules/InfoCard/InfoCard';
import { categoryData } from '../FormsLayout/FormsLayout';
import {
  StyledClientInfo,
  StyledSidebar,
  StyledSidebarButton,
  StyledCardContainer,
} from './ClientInfo.styles';

export const ClientInfo = (props) => {
  const { data, setData } = useDataContext();
  const selected = useMemo(
    () => categoryData.questions.filter(({ id }) => data[id]),
    [data],
  );
  const notSelected = useMemo(
    () => categoryData.questions.filter(({ id }) => !data[id]),
    [data],
  );

  const handleSidebarButtonClick = (id) => {
    setData({
      ...data,
      [id]: undefined,
    });
  };

  return (
    <StyledClientInfo {...props}>
      <StyledSidebar>
        {selected.map(({ id, icon, label }) => {
          return (
            <StyledSidebarButton
              key={id}
              onClick={() => handleSidebarButtonClick(id)}
            >
              <img src={icon} alt={label} />
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
  );
};
