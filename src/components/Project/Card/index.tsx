import * as S from './styles';

interface CardProps {
  imgUrl: string;
  name: string;
  projectUrl: string;
}

export function Card({ imgUrl, name, projectUrl }: CardProps) {
  return (
    <S.Card href={projectUrl} target="_blank">
      <img src={imgUrl} alt={name} />
    </S.Card>
  );
}
