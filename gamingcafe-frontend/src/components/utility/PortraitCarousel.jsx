import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

import img1 from '../../assets/valorant.jpg';
import img2 from '../../assets/cod.jpg';
import img3 from '../../assets/pubg.jpg';
import img4 from '../../assets/fc25.jpg';
import img5 from '../../assets/dota2.jpg';
import img6 from '../../assets/age.jpg';
import img7 from '../../assets/gta.jpg';

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
      // breakpoints={{
      //   320: { slidesPerView: 2 },    // phones portrait
      //   480: { slidesPerView: 3 },    // phones landscape
      //   768: { slidesPerView: 4 },    // tablets
      //   1024: { slidesPerView: 6 },   // small desktops
      //   1280: { slidesPerView: 8 },   // large screens like yours
      //   1600: { slidesPerView: 10 },  // ultra-wide
      // }}
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