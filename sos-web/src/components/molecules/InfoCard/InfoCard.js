import { useEffect, useRef, useState } from 'react';
import { Icon } from '../../atoms/Icon/Icon';
import { Radio } from '../Radio/Radio';
import {
  StyledInfoCard,
  StyledSpan,
  StyledCardContainer,
  StyledDropdown,
  StyledArrow,
} from './InfoCard.styles';

export const InfoCard = ({
  data: { id, img, alt, name, question, labels },
}) => {
  const wrapperRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [value, setValue] = useState('');

  const handleClickOutside = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleRadioChange = ({ target }) => {
    setValue(target.value);
    setShowDropdown(false);
  };

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <StyledCardContainer>
      <StyledInfoCard $hasDropdown={labels.length > 2}>
        {/* <img src={img} alt={alt} /> */}
        <Icon.Logo />
        <StyledSpan>{question}</StyledSpan>
        {labels.length > 2 && (
          <StyledArrow onClick={toggleDropdown}>
            <span>Open dropdown</span>
            <Icon.ArrowDown />
          </StyledArrow>
        )}
        {(showDropdown || labels.length < 3) && (
          <StyledDropdown ref={wrapperRef}>
            {labels.map((label, i) => {
              return (
                <Radio
                  key={i}
                  type="radio"
                  id={id}
                  name={name}
                  label={label}
                  value={label}
                  isChecked={value === label}
                  onChange={handleRadioChange}
                />
              );
            })}
          </StyledDropdown>
        )}
      </StyledInfoCard>
    </StyledCardContainer>
  );
};
