import { Envelope, GlobeHemisphereWest, User } from '@phosphor-icons/react';
import { useInView } from 'react-intersection-observer';
import contactImg from '@/Assets/contact-img.svg';

import { Information } from './Information';

import * as S from './styles';

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <S.Container id="contato" ref={ref}>
      <S.Title onView={inView}>Entre em contato</S.Title>
      <S.Content>
        <S.FigureContent onView={inView}>
          <img src={contactImg} alt="Homem se conectando com outras pessoas" />
        </S.FigureContent>

        <S.ContactContent onView={inView}>
          <Information icon={<User size={32} />} title="Nome" description="Reinaldo Correia" />
          <Information icon={<Envelope size={32} />} title="E-mail" description="santosdoscorreiareinaldo@gmail.com" />
          <Information icon={<GlobeHemisphereWest size={32} />} title="Endereço" description="Francisco Morato - SP" />
        </S.ContactContent>
      </S.Content>
    </S.Container>
  );
}
