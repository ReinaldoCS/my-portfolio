import { Envelope, GlobeHemisphereWest, User } from '@phosphor-icons/react';
import contactImg from '@/Assets/contact-img.svg';

import * as S from './styles';
import { Information } from './Information';

export function Contact() {
  return (
    <S.Container>
      <h2>Entre em contato</h2>
      <S.Content>
        <figure>
          <img src={contactImg} alt="Homem se conectando com outras pessoas" />
        </figure>

        <S.ContactContainer>
          <Information icon={<User size={32} />} title="Nome" description="Reinaldo Correia" />
          <Information icon={<Envelope size={32} />} title="E-mail" description="santosdoscorreiareinaldo@gmail.com" />
          <Information icon={<GlobeHemisphereWest size={32} />} title="Endereço" description="Francisco Morato - SP" />
        </S.ContactContainer>
      </S.Content>
    </S.Container>
  );
}
