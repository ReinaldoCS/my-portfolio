import typescriptImg from '@/Assets/skills/typescript.svg';

import { Container } from './styles';

export function Card() {
  return (
    <Container>
      <img src={typescriptImg} alt="Typescript" />
      <p>Typescript</p>
    </Container>
  );
}
