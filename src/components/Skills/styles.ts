import styled from 'styled-components';

export const Container = styled.section`
  padding-left: 10%;
  padding-right: 10%;
`;

export const Content = styled.div`
  padding: 1.5rem;
  border-radius: 24px;

  background-color: var(--gray-800);

  transform: translateY(-1.5rem);
`;

export const Header = styled.div`
  margin: 0 auto 1.5rem;
  max-width: 300px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;

  > p {
    margin-top: 1rem;
  }
`;

export const TestContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
