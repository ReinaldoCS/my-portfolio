import { Carrossel } from './Carrossel';
import { Container, Content, Header } from './styles';

import 'swiper/css';

export function Skills() {
  return (
    <Container>
      <Content>
        <Header>
          <h2>Habilidades</h2>
          <p>Algumas tecnologias que costumo utilizar no dia a dia para desenvolver meus projetos</p>
        </Header>
        <div>
          <Carrossel />
        </div>
      </Content>
    </Container>
  );
}
