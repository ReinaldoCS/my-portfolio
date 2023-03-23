import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 3rem;
  }

  p {
    font-weight: 600;
    color: var(--white);
    margin-top: 0.5rem;
  }
`;
