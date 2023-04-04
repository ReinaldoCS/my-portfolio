import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: var(--white);

  figure {
    margin-right: 0.75rem;
  }
`;

export const TextField = styled.div`
  strong,
  span {
    display: block;
  }

  span {
    margin-top: 0.25rem;
  }
`;
