import rangonlineImg from '@/Assets/projects/rangonline.png';
import letmeaskImg from '@/Assets/projects/letmeask.png';

import { Card } from './Card';

import * as S from './styles';

export function Project() {
  return (
    <S.Container>
      <h2>Projetos</h2>

      <S.Content>
        <Card imgUrl={rangonlineImg} name="RangOnline" projectUrl="https://rango-online.vercel.app" />
        <Card imgUrl={letmeaskImg} name="LetmeAsk" projectUrl="https://letmeask-eb3cc.web.app" />
      </S.Content>
    </S.Container>
  );
}
