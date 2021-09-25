import { InfoCard } from '../../molecules/InfoCard/InfoCard';
import {
  StyledClientInfo,
  StyledSidebar,
  StyledCardContainer,
} from './ClientInfo.styles';

export const ClientInfo = (props) => {
  const cards = [
    {
      id: 1,
      img: '',
      alt: 'alt',
      name: 'children',
      question: 'Da li su dete/deca svedoci nasilja?',
      labels: ['Da', 'Ne'],
    },
    {
      id: 2,
      img: '',
      alt: 'alt',
      name: 'gender',
      question: 'Pol?',
      labels: ['Muski', 'Zenski'],
    },
    {
      id: 3,
      img: '',
      alt: 'alt',
      name: 'place',
      question: 'Mesto?',
      labels: ['Novi Sad', 'Okolina Novog Sada', 'Druga opstina'],
    },
    {
      id: 4,
      img: '',
      alt: 'alt',
      name: 'asd',
      question: 'Mesto?',
      labels: ['Novi Sad', 'Okolina Novog Sada', 'Druga opstina'],
    },
    {
      id: 5,
      img: '',
      alt: 'alt',
      name: 'zxc',
      question: 'Mesto?',
      labels: ['Novi Sad', 'Okolina Novog Sada', 'Druga opstina'],
    },
  ];
  return (
    <StyledClientInfo {...props}>
      <StyledSidebar></StyledSidebar>
      <StyledCardContainer>
        {cards.map((card, i) => (
          <InfoCard key={i} data={card} />
        ))}
      </StyledCardContainer>
    </StyledClientInfo>
  );
};
