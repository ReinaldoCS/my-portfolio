import { ReactNode } from 'react';

import * as S from './styles';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
}

export function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <S.Container href={href} target="_blank" rel="noreferrer">
      {icon}
    </S.Container>
  );
}
