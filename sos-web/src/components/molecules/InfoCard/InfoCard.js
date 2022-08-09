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
import { CheckboxQuestion } from '../CheckboxQuestion/CheckboxQuestion';
import { Button } from '../Button/Button';

export const InfoCard = ({
  label,
  id,
  options,
  condition,
  icon,
  multipleAnswers,
}) => {
  const { data, setData } = useDataContext();
  const wrapperRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkboxData, setCheckboxData] = useState([]);

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

  const handleCheckboxChange = ({ target }) => {
    if (!checkboxData.length) {
      setCheckboxData([target.value]);
    } else {
      setCheckboxData((prevState) => {
        return [...prevState, target.value];
      });
    }
  };

  const submitCheckbox = () => {
    let multipleAnswersQuestion = {
      [id]: [],
    };
    checkboxData.forEach((value) => {
      multipleAnswersQuestion[id].push(value);
    });
    setData(multipleAnswersQuestion);
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown, handleClickOutside]);

  const showCard = useMemo(
    () => shouldBeDisplayed(data, condition),
    [data, condition],
  );

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
          <>
            <StyledDropdown ref={wrapperRef}>
              {options.map(({ id: optionId, label: optionLabel }) =>
                multipleAnswers ? (
                  <CheckboxQuestion
                    key={optionId}
                    label={optionLabel}
                    value={optionId}
                    name={label}
                    isChecked={data[id] === optionId}
                    onChange={handleCheckboxChange}
                  />
                ) : (
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
                ),
              )}
              {multipleAnswers && (
                <div style={{ marginLeft: '40px' }}>
                  <Button onClick={submitCheckbox}>Potvrdi</Button>
                </div>
              )}
            </StyledDropdown>
          </>
        )}
      </StyledInfoCard>
    </StyledCardContainer>
  ) : (
    <Noop />
  );
};
