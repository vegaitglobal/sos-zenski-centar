import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { StyledPanel, StyledTop, StyledContent } from './Panel.styles';

export const Panel = ({ title, children, ...props }) => {
  return (
    <StyledPanel {...props}>
      <StyledTop>
        <Paragraph type="medium">{title}</Paragraph>
      </StyledTop>
      <StyledContent>{children}</StyledContent>
    </StyledPanel>
  );
};
