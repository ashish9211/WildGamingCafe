import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import promo3 from '../../assets/promo/promo3.jpg';
import promo2 from '../../assets/promo/promo2.jpg';
import promo4 from '../../assets/promo/promo4.jpg';
export default function PromoPage() {
  return (
   <div className="w-screen h-screen bg-black  overflow-hidden">
  <TECarousel showControls showIndicators crossfade ride="carousel">
    <div className="relative w-full h-full overflow-hidden after:clear-both after:block after:content-['']">
      <TECarouselItem
        itemID={1}
        className="relative float-left -mr-[100%] hidden w-screen h-screen !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      >
        <img
          src={promo3}
          className="block w-full h-full object-cover"
          alt="..."
        />
        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
          <h5 className="text-xl">First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </TECarouselItem>

      {/* Repeat for other slides with same height and width */}
      <TECarouselItem
        itemID={2}
        className="relative float-left -mr-[100%] hidden w-screen h-screen !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      >
        <img
          src={promo4}
          className="block w-full h-full object-cover"
          alt="..."
        />
        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
          <h5 className="text-xl">Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </TECarouselItem>

      {/* Third item */}
      <TECarouselItem
        itemID={3}
        className="relative float-left -mr-[100%] hidden w-screen h-screen !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      >
        <img
          src={promo2}
          className="block w-full h-full object-cover"
          alt="..."
        />
        <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
          <h5 className="text-xl">Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </TECarouselItem>
    </div>
  </TECarousel>
</div>
  )
};