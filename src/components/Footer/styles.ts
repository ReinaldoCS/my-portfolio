import styled from 'styled-components';

export const Container = styled.footer`
  margin: 0 auto;

  padding: 2rem 2rem;
  margin-top: 2rem;

  background: var(--gray-800);

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 1.5rem;

    @media (min-width: 720px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--white);
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
