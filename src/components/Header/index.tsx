import { useState } from 'react';
import { HamburgerButton } from './HamburgerButton';
import { Logo } from './Logo';
import { Container, Menu, Nav } from './styles';

function Header() {
  const [isActiveButton, setIsActiveButton] = useState(false);

  function handleOnClickHamburger() {
    setIsActiveButton(!isActiveButton);
  }

  const links = [
    {
      text: 'Início',
      link: 'http://localhost:5173/',
    },
    {
      text: 'Habilidades',
      link: 'http://localhost:5173/',
    },
    {
      text: 'Sobre mim',
      link: 'http://localhost:5173/',
    },
    {
      text: 'Projetos',
      link: 'http://localhost:5173/',
    },
    {
      text: 'Contato',
      link: 'http://localhost:5173/',
    },
  ];

  return (
    <>
      <Container>
        <Logo />
        <Nav>
          {links.map((item) => (
            <a href={item.link}>{item.text}</a>
          ))}
        </Nav>
        <HamburgerButton onClick={handleOnClickHamburger} isActive={isActiveButton} />
      </Container>
      <Menu isOpen={isActiveButton}>
        {links.map((item) => (
          <a href={item.link}>{item.text}</a>
        ))}
      </Menu>
    </>
  );
}

export default Header;
