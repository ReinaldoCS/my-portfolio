import headerImg from '@/Assets/header-img.svg';

import { Background, Container, Information } from './styles';

export function Start() {
  return (
    <Background>
      <Container>
        <Information>
          <h2>Olá, meu nome é Reinaldo mas pode me chamar de Barry.</h2>
          <p>
            Apaixonado por tecnologia. Atualmente trabalho como Junior Software Engineer na NTTDATA, quando não estou
            trabalhando, estou codando projetos pessoais ou jogando com meus amigos
          </p>
        </Information>

        <img src={headerImg} alt="Astronauta" />
      </Container>
    </Background>
  );
}
