import { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { useDataContext } from '../../../utils/store';
import { Icon } from '../../atoms/Icon/Icon';
import { Noop } from '../../atoms/Noop/Noop';
import { Radio } from '../Radio/Radio';
import {
  StyledInfoCard,
  StyledSpan,
  StyledCardContainer,
  StyledDropdown,
  StyledArrow,
} from './InfoCard.styles';
import { baseUrl } from '../../../utils/apiUrl';
import { shouldBeDisplayed } from '../../../utils/shouldBeDisplayed';

export const InfoCard = ({ label, id, options, condition, icon }) => {
  const { data, setData } = useDataContext();
  const wrapperRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClickOutside = useCallback((e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  }, []);

  const toggleDropdown = useCallback(() => {
    setShowDropdown(!showDropdown);
  }, [showDropdown]);

  const handleRadioChange = useCallback(
    ({ target }) => {
      setData({
        [id]: target.value,
      });
      setShowDropdown(false);
    },
    [id, setData],
  );

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown, handleClickOutside]);

  const showCard = useMemo(() => shouldBeDisplayed(data, condition), [data, condition]);
  
  const hasDropdown = options.length > 2;

  return showCard ? (
    <StyledCardContainer>
      <StyledInfoCard $hasDropdown={hasDropdown}>
        <img src={`${baseUrl}/${icon}`} alt={`${label}`} />
        <StyledSpan>{label}</StyledSpan>
        {hasDropdown && (
          <StyledArrow onClick={toggleDropdown}>
            <span>Open dropdown</span>
            <Icon.ArrowDown />
          </StyledArrow>
        )}
        {(showDropdown || !hasDropdown) && (
          <StyledDropdown ref={wrapperRef}>
            {options.map(({ id: optionId, label: optionLabel }) => (
              <Radio
                key={optionId}
                type="radio"
                id={optionId}
                name={label}
                label={optionLabel}
                value={optionId}
                isChecked={data[id] === optionId}
                onChange={handleRadioChange}
              />
            ))}
          </StyledDropdown>
        )}
      </StyledInfoCard>
    </StyledCardContainer>
  ) : (
    <Noop /> 
  );
};
