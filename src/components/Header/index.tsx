import { useEffect, useState } from 'react';
import { HamburgerButton } from './HamburgerButton';
import { Logo } from './Logo';
import { Container, Menu, Nav } from './styles';

export function Header() {
  const [isActiveButton, setIsActiveButton] = useState(false);
  const [backgroundTransparent, setBackgroundTransparent] = useState(true);

  const links = [
    {
      text: 'Início',
      link: 'http://localhost:5173/#inicio',
    },
    {
      text: 'Habilidades',
      link: 'http://localhost:5173/#habilidades',
    },
    {
      text: 'Sobre mim',
      link: 'http://localhost:5173/#sobre-mim',
    },
    {
      text: 'Projetos',
      link: 'http://localhost:5173/#projetos',
    },
    {
      text: 'Contato',
      link: 'http://localhost:5173/#contato',
    },
  ];

  function handleScroll() {
    const position = window.pageYOffset;
    if (position > 100) {
      setBackgroundTransparent(false);
    } else {
      setBackgroundTransparent(true);
    }
  }

  function handleOnClickHamburger() {
    setIsActiveButton(!isActiveButton);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Container isBackgroundTransparent={backgroundTransparent}>
        <Logo />
        <Nav>
          {links.map((item) => (
            <a key={item.text} href={item.link}>
              {item.text}
            </a>
          ))}
        </Nav>
        <HamburgerButton onClick={handleOnClickHamburger} isActive={isActiveButton} />
      </Container>
      <Menu isOpen={isActiveButton}>
        {links.map((item) => (
          <a key={item.text} href={item.link}>
            {item.text}
          </a>
        ))}
      </Menu>
    </>
  );
}
