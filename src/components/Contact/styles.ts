import styled, { css } from 'styled-components';

interface ViewPros {
  onView: boolean;
}

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

export const Title = styled.h2<ViewPros>`
  opacity: 0;

  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  ${(props) =>
    props.onView &&
    css`
      opacity: 1;
    `}
`;

export const FigureContent = styled.figure<ViewPros>`
  opacity: 0;

  @media (min-width: 720px) {
    transform: translateX(-25vw);
  }

  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  ${(props) =>
    props.onView &&
    css`
      opacity: 1;

      @media (min-width: 720px) {
        transform: translateX(0px);
      }
    `}
`;

export const ContactContent = styled.div<ViewPros>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  gap: 1rem;

  opacity: 0;

  @media (min-width: 720px) {
    transform: translateX(+25vw);
  }

  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  ${(props) =>
    props.onView &&
    css`
      opacity: 1;

      @media (min-width: 720px) {
        transform: translateX(0px);
      }
    `}
`;
