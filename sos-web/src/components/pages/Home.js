import { Heading } from '../atoms/Heading/Heading';
import { Icon } from '../atoms/Icon/Icon';
import { Container } from '../layout/Container';

export const Home = () => {
  return (
    <Container>
      <Heading>Home</Heading>
      <Icon.Report />
    </Container>
  );
};
