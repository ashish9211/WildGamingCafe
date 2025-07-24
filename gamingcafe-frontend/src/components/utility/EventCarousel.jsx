import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
 

import event1 from '../../assets/events/event1.jpg';
import event2 from '../../assets/events/event2.jpg';
import event3 from '../../assets/events/event3.jpg';
import event4 from '../../assets/events/event4.jpg';
import event5 from '../../assets/events/event5.jpg';
import event6 from '../../assets/events/event6.jpg';
import event7 from '../../assets/events/event7.jpg';
import event8 from '../../assets/events/event8.jpg';

const eventImages = [event1, event2, event3, event4, event5, event6, event7, event8];

const EventCarousel = () => {
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
      lazy={true} // Enable lazy loading for the Swiper instance
    >
      {[...eventImages, ...eventImages].map((src, index) => (
        <SwiperSlide
          key={index}
          style={{ width: '600px' }} // doubled from 300px
          className="h-full"
        >
          <img
            src={src}
            alt={`Event ${index + 1}`}
            className="h-full w-full object-cover rounded-none"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EventCarousel;