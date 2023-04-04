import styled from 'styled-components';

import banner from '@/Assets/banner-bg.png';

export const Background = styled.section`
  height: 100vh;
  width: 100%;

  background-image: url(${banner});
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1080px) {
    background-position: center top;
  }
  /* background-position: center top; */
`;

export const Container = styled.div`
  padding: 72px 2rem 0;

  display: flex;
  width: 100%;
  height: 100%;

  max-width: 1030px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  > img {
    width: 100%;
    max-width: 31rem;
  }

  @media (min-width: 720px) {
    max-width: 80%;
    justify-content: center;
    gap: 4rem;
  }

  @media (min-width: 1080px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 2rem;

    > img {
      flex: 1;
      width: 50%;
      max-width: 510px;
    }
  }
`;

export const Information = styled.aside`
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    /* max-width: 60%; */
    max-width: 510px;
  }

  @media (min-width: 1080px) {
    flex: 1;
  }
`;
