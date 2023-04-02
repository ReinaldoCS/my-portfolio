import { ArrowCircleLeft, ArrowCircleRight } from '@phosphor-icons/react';
import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLeft?: boolean;
}

export function Arrow({ isLeft, ...rest }: ArrowProps) {
  const icon = isLeft ? <ArrowCircleLeft size={32} /> : <ArrowCircleRight size={32} />;
  return (
    <Container type="button" {...rest}>
      {icon}
    </Container>
  );
}

Arrow.defaultProps = {
  isLeft: false,
};
