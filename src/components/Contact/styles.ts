import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 2rem;
  padding: 2rem 0;
  margin-top: 4rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.5rem;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  gap: 1rem;
`;
