import { ReactNode } from 'react';

import * as S from './styles';

interface InformationProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function Information({ icon, title, description }: InformationProps) {
  return (
    <S.Container>
      <figure>{icon}</figure>
      <S.TextField>
        <strong>{title}</strong>
        <span>{description}</span>
      </S.TextField>
    </S.Container>
  );
}
