import {
  StyledFormControl,
  StyledCheckbox,
  StyledLabel,
  StyledLabelText,
} from './Checkbox.styles';

export const Checkbox = ({
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
        <StyledCheckbox
          type="checkbox"
          name={name}
          onChange={onChange}
          value={value}
          defaultChecked={isChecked}
        />
        <StyledLabelText>{label}</StyledLabelText>
      </StyledLabel>
    </StyledFormControl>
  );
};
