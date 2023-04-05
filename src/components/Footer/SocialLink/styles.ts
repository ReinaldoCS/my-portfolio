import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100%;

  height: 2rem;
  width: 2rem;

  border: 1.5px solid var(--white);

  transition: all 0.5s;

  &:hover {
    background-color: var(--white);

    svg {
      color: var(--gray-800);
    }
  }

  svg {
    color: var(--white);
    font-size: 1.5rem;
  }
`;
