import { Card } from './Card';
import { Container, Content } from './styles';

export function Skills() {
  return (
    <Container>
      <Content>
        <h2>Habilidades</h2>
        <p>Algumas tecnologias que costumo utilizar no dia a dia para desenvolver meus projetos</p>
        <Card />
        <Card />
        <Card />
        <Card />
      </Content>
    </Container>
  );
}
