import { Bar, Container } from './styles';

interface HamburgerButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export function HamburgerButton({ onClick, isActive = false }: HamburgerButtonProps) {
  function handleOnClick() {
    onClick();
  }

  return (
    <Container type="button" onClick={handleOnClick}>
      <Bar isActive={isActive} />
    </Container>
  );
}
