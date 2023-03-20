import styled from 'styled-components';

interface BarProps {
  isActive: boolean;
}

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  width: 3rem;
  height: 3rem;

  border: 0;
  background-color: transparent;
`;

export const Bar = styled.span<BarProps>`
  width: 2rem;
  height: 3px;
  border-radius: 8px;
  position: relative;

  background-color: ${(props) => (props.isActive ? 'transparent' : 'var(--white)')};

  transition: background-color 0.5s;

  &::before,
  &::after {
    content: '';
    width: 2rem;
    height: 3px;
    border-radius: 8px;

    left: 0;
    background-color: var(--white);

    transition: transform 0.5s;
  }

  &::before {
    position: absolute;
    top: ${(props) => (props.isActive ? '0px' : '-10px')};

    transform: ${(props) => props.isActive && 'rotate(45deg)'};
  }

  &::after {
    position: absolute;
    top: ${(props) => (props.isActive ? '0px' : '10px')};

    transform: ${(props) => props.isActive && 'rotate(-45deg)'};
  }
`;
