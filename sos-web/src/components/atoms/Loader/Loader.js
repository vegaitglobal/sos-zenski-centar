import {
  StyledAnimatingCircle,
  StyledBaseCircle,
  StyledLoader,
  StyledLoaderHolder,
} from './Loader.styles';

export const Loader = (props) => (
  <StyledLoaderHolder {...props}>
    <StyledLoader>
      <StyledBaseCircle />
      <StyledAnimatingCircle />
    </StyledLoader>
  </StyledLoaderHolder>
);
