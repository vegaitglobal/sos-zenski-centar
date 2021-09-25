import { StyledInput, StyledFormRow, StyledLabel } from './Input.styles';

export const Input = ({ label, ...props }) => {
  return (
    <StyledFormRow>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledInput {...props} />
    </StyledFormRow>
  );
};
