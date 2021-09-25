import { StyledTextArea, StyledContent } from './TextArea.styles';

export const TextArea = ({ title, children, ...props }) => {
  const string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar, ligula fringilla malesuada aliquam, dui lorem cursus quam, ac volutpat urna eros eu libero. Vivamus a dapibus lacus.';

  return (
    <StyledTextArea rows="10" {...props}>
      {string}
    </StyledTextArea>
  );
};
