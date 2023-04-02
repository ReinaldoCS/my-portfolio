import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { slidesInformation } from './imports';
import { Card } from '../Card';
import { Arrow } from '../Arrow';

import { Container } from './styles';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);
export function Carrossel() {
  return (
    <Container>
      <div>
        <Arrow className="swiper-button-prev" isLeft />
        <Swiper
          loop
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          // pagination={{ clickable: true }}
          breakpoints={{
            420: {
              slidesPerView: 2,
            },
            620: {
              slidesPerView: 3,
            },
            820: {
              slidesPerView: 4,
            },
            1020: {
              slidesPerView: 6,
            },
          }}
        >
          {slidesInformation &&
            slidesInformation.map((item) => (
              <SwiperSlide key={item.id}>
                <Card title={item.title} imgUrl={item.img} />
              </SwiperSlide>
            ))}
        </Swiper>
        <Arrow className="swiper-button-next" />
      </div>
    </Container>
  );
}
