import {
  StyledFormControl,
  StyledCheckbox,
  StyledLabel,
  StyledLabelText,
} from './CheckboxQuestion.styles';

export const CheckboxQuestion = ({
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
