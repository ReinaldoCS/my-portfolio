import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 2rem;

  background-color: var(--gray-800);
  border-radius: 8px;

  padding: 2rem 0;
  margin-top: 4rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1.5rem;

  @media (min-width: 630px) {
    flex-direction: row;
  }
`;
