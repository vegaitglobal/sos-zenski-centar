import { StyledInput, StyledFormRow, StyledLabel } from './Input.styles';

export const Input = ({ label, ...props }) => {
  return (
    <StyledFormRow>
      <StyledLabel htmlFor={props.id}>{label}</StyledLabel>
      <StyledInput {...props} />
    </StyledFormRow>
  );
};
