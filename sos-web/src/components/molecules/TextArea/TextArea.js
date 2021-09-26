import { StyledTextArea } from './TextArea.styles';

export const TextArea = ({ ...props }) => {
  return <StyledTextArea rows="10" {...props}></StyledTextArea>;
};
