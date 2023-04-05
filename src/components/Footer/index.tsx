import { InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

import * as S from './styles';
import { SocialLink } from './SocialLink';

export function Footer() {
  return (
    <S.Container>
      <div>
        <S.Logo>{'<ReinaldoCS />'}</S.Logo>

        <S.SocialContainer>
          <SocialLink href="https://www.instagram.com/reinaldo3ds/" icon={<InstagramLogo />} />
          <SocialLink href="https://www.linkedin.com/in/reinaldo-correia-ba19ab179/" icon={<LinkedinLogo />} />
          <SocialLink href="https://github.com/ReinaldoCS" icon={<GithubLogo />} />
        </S.SocialContainer>
      </div>
    </S.Container>
  );
}
