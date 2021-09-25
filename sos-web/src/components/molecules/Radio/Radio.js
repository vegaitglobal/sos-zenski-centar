import {
  StyledFormControl,
  StyledRadio,
  StyledLabel,
  StyledLabelText,
} from './Radio.styles';

export const Radio = ({
  label,
  value,
  name,
  isChecked,
  onChange,
  ...props
}) => {
  return (
    <StyledFormControl {...props}>
      <StyledLabel>
        <StyledRadio
          type="radio"
          name={name}
          onChange={onChange}
          value={value}
          checked={isChecked}
        />
        <StyledLabelText>{label}</StyledLabelText>
      </StyledLabel>
    </StyledFormControl>
  );
};
