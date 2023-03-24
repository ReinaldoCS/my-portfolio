import { Container } from './styles';

interface CardProps {
  imgUrl: string;
  title: string;
}

export function Card({ imgUrl, title }: CardProps) {
  return (
    <Container>
      <img src={imgUrl} alt={title} />
      <p>{title}</p>
    </Container>
  );
}
