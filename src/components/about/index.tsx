import itIsMeImg from '@/Assets/iam.png';
import { AboutStyled } from './about-styled';

export function About() {
  return (
    <AboutStyled.Container>
      <div>
        <h2>Sobre mim</h2>

        <AboutStyled.Content>
          <img src={itIsMeImg} alt="Reinaldo Correia" />
          <AboutStyled.TextSession>
            <p>Sou um desenvolvedor apaixonado por aprender e compartilhar conhecimentos.</p>
            <p>
              Atualmente, estou me especializando em desenvolvimento de aplicações web com React e TypeScript através do
              bootcamp da Rocketseat. Além disso, possuo habilidades em desenvolvimento de backend com Express e NestJS,
              e conhecimentos básicos em criação de aplicativos móveis com React Native.
            </p>
            <p>
              Sou flexível e adaptável às mudanças e tecnologias, adoro trabalhar em equipe e sou organizado na gestão
              do tempo e dos projetos. Como Junior Software Engineer em uma empresa de consultoria e desenvolvimento de
              software, desenvolvo automações de processos e testes de qualidade, além de ter experiência em bancos de
              dados SQL e Java e tecnologias de automação como Selenium.
            </p>
            <p>
              Meu objetivo é continuar aprimorando minhas habilidades em desenvolvimento de software e explorar novas
              tecnologias na indústria em constante mudança.
            </p>
          </AboutStyled.TextSession>
        </AboutStyled.Content>
      </div>
    </AboutStyled.Container>
  );
}
