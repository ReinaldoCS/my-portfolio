import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 4rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80%;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  margin-top: 2rem;

  > img {
    width: 80%;
    max-width: 340px;
  }

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

const TextSession = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 0.5rem;

  @media (min-width: 920px) {
    order: -1;

    max-width: 550px;
  }
`;

export const AboutStyled = {
  Container,
  Content,
  TextSession,
};
