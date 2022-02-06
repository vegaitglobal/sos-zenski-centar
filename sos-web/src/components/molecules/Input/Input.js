import { StyledInput, StyledFormRow, StyledLabel, StyledText } from './Input.styles';

export const Input = ({ label, ...props }) => {
  return (
    <StyledFormRow>
      <StyledLabel htmlFor={props.id} {...props}>
        {label}
      </StyledLabel>
      <StyledInput {...props} />
      {!(props.touched && props.errorMessage && !props.valid)
        ? null
        : <StyledText>
          {props.errorMessage}
        </StyledText>
      }
    </StyledFormRow>
  );
};
