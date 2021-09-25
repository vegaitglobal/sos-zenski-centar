import { StyledContainer, StyledHome } from '../pages/Home.styles';
import { HomeContent } from '../organisms/HomeContent/HomeContent';

export const Home = () => {
  return (
    <StyledHome>
      <StyledContainer>
        <HomeContent></HomeContent>
      </StyledContainer>
    </StyledHome>
  );
};
