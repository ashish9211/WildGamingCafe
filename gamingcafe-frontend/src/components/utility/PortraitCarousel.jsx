import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

import img1 from '../../assets/tinified/valorant.jpg';
import img2 from '../../assets/tinified/cod.jpg';
import img3 from '../../assets/tinified/pubg.jpg';
import img4 from '../../assets/tinified/fc25.jpg';
import img5 from '../../assets/tinified/dota2.jpg';
import img6 from '../../assets/tinified/age.jpg';
import img7 from '../../assets/tinified/gta.jpg';

const images = [img1, img2, img3, img4, img5, img6 ,img7];

const PortraitCarousel = () => {
  return (
    <Swiper
      modules={[FreeMode, Autoplay]}
      loop={true}
      freeMode={false}
      slidesPerView="auto"
      spaceBetween={5}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      speed={1500}
      grabCursor={true}
      className="w-full h-96 will-change-transform"
      lazy={true}
    >
      {[...images, ...images ].map((src, index) => (
        <SwiperSlide
          key={index}
          style={{width:"300px"}}
          className="h-full"
        >
          <img
            src={src}
            alt={`Game ${index + 1}`}
            className="h-full w-full object-cover rounded-none"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortraitCarousel;