import styled from 'styled-components';

export const Container = styled.header`
  display: flex;

  height: 72px;
  padding: 2rem;
  align-items: center;
  justify-content: space-between;

  position: relative;
  /* background-color: var(--gray-700); */

  @media (min-width: 1080px) {
    > button {
      visibility: hidden;
      max-width: none;
      display: none;
    }
  }
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  max-width: ${(props) => !props.isOpen && 'none'};

  position: absolute;
  top: 72px;
  left: 2rem;
  right: 2rem;

  padding: 2rem;
  gap: 1rem;

  background: rgba(0, 0, 0, 0.28);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(7.9px);
  -webkit-backdrop-filter: blur(7.9px);

  a {
    text-decoration: none;
    padding: 1rem;
    width: 100%;
    color: var(--white);

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    border: 1px solid transparent;

    transition: background 0.2s;

    :hover {
      background: rgba(139, 61, 255, 0.28);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }

  @media (min-width: 720px) {
    width: 20rem;
    right: 2rem;
    left: auto;
  }

  @media (min-width: 1080px) {
    visibility: hidden;
    max-width: none;
  }
`;

export const Nav = styled.nav`
  a {
    text-decoration: none;
    font-weight: 600;
    padding: 1.5rem;
    color: var(--gray-700);

    transition: color 0.2s;

    :hover {
      color: var(--white);
    }
  }

  @media (max-width: 1080px) {
    visibility: hidden;
    max-width: none;
  }
`;
