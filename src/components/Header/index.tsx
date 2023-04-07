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
      link: '#inicio',
    },
    {
      text: 'Habilidades',
      link: '#habilidades',
    },
    {
      text: 'Sobre mim',
      link: '#sobre-mim',
    },
    {
      text: 'Projetos',
      link: '#projetos',
    },
    {
      text: 'Contato',
      link: '#contato',
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
          <a key={item.text} href={item.link} onClick={handleOnClickHamburger}>
            {item.text}
          </a>
        ))}
      </Menu>
    </>
  );
}
