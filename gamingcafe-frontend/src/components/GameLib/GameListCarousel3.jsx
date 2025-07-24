import React, { useEffect, useRef, useState, useCallback } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules
// We only need FreeMode for manual dragging with momentum
import { FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode'; // Needed for freeMode functionality


import featuredBg from '../../assets/GamelibBackgrounds/featured.jpg';
import singleplayerBg from '../../assets/GamelibBackgrounds/singleplayer4.jpg';
import shootersBg from '../../assets/GamelibBackgrounds/playstation-1.webp';
import rpgBg from '../../assets/GamelibBackgrounds/racing-1.png';
import sportsBg from '../../assets/GamelibBackgrounds/sports-2.png';

const genres = [
  { name: "FEATURED", sectionId: "featured-games", backgroundImage: featuredBg, overlayColor: "rgba(220, 20, 60, 0.7)" },
  { name: "MULTIPLAYER", sectionId: "multiplayer-games", backgroundImage: "", overlayColor: "rgba(65, 105, 225, 0.7)" },
  { name: "SINGLEPLAYER", sectionId: "singleplayer-games", backgroundImage: singleplayerBg, overlayColor: "rgba(50, 205, 50, 0.7)" },
  { name: "FIGHTING", sectionId: "fighting-games", backgroundImage: "", overlayColor: "rgba(255, 140, 0, 0.7)" },
  { name: "PLAYSTATION", sectionId: "ps-games", backgroundImage: shootersBg, overlayColor: "rgba(106, 90, 205, 0.7)" },
  { name: "PLWF", sectionId: "friends-games", backgroundImage: "", overlayColor: "rgba(218, 165, 32, 0.7)" },
  { name: "RACING", sectionId: "race-games", backgroundImage: rpgBg, overlayColor: "rgba(128, 0, 128, 0.7)" },
  { name: "SPORTS", sectionId: "sports-games", backgroundImage: sportsBg, overlayColor: "rgba(0, 128, 0, 0.7)" },
];

// Utility to load images from assets/slideImages/[GENRE]/*
const imageModules = import.meta.glob("../../assets/slideImages/*/*.{jpg,jpeg,png,svg}", {
  eager: true,
  import: "default",
});

const genreImages = {};
for (const path in imageModules) {
  const match = path.match(/slideImages\/([^/]+)\/[^/]+$/);
  if (match) {
    const genreName = match[1];
    if (!genreImages[genreName]) genreImages[genreName] = [];
    genreImages[genreName].push(imageModules[path]);
  }
}

// Define the base dimensions for the SwiperSlide
const breakpoints = {
    // [width, height] corresponding to Tailwind's default breakpoints
    default: [100, 150],
    sm: [120, 180],
    md: [140, 210],
    lg: [160, 240],
    xl: [180, 270],
};


function SliderRow({ genre }) {
  const images = genreImages[genre.name] || [];

  const [slideDimensions, setSlideDimensions] = useState(breakpoints.default);

  const getSwiperStartPadding = useCallback(() => {
    const viewportWidth = window.innerWidth;
    const maxContentWidth = 1280;
    const contentPadding = 8; // p-2 is 8px

    if (viewportWidth >= 1024) { // Equivalent to 'lg' breakpoint
        const horizontalMargin = (viewportWidth - maxContentWidth) / 2;
        return horizontalMargin + contentPadding;
    } else if (viewportWidth >= 768) { // Equivalent to 'md' breakpoint
        return 32; // md:px-8 (32px)
    } else if (viewportWidth >= 640) { // Equivalent to 'sm' breakpoint
        return 24; // sm:px-6 (24px)
    }
    return 16; // px-4 (16px)
  }, []);

  const [swiperStartPadding, setSwiperStartPadding] = useState(getSwiperStartPadding());

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setSlideDimensions(breakpoints.xl);
      } else if (width >= 1024) {
        setSlideDimensions(breakpoints.lg);
      } else if (width >= 768) {
        setSlideDimensions(breakpoints.md);
      } else if (width >= 640) {
        setSlideDimensions(breakpoints.sm);
      } else {
        setSlideDimensions(breakpoints.default);
      }
      setSwiperStartPadding(getSwiperStartPadding());
    };

    handleResize(); // Initial call to set dimensions/padding
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSwiperStartPadding]);


  if (images.length === 0) {
      console.warn(`No images found for genre: ${genre.name}. Please check the path in assets/slideImages/${genre.name}/`);
      return null; // Don't render the row if no images are found
  }

  return (
    <div
        id={genre.sectionId}
        className={`pt-24 pb-10 bg-cover bg-center relative ${!genre.backgroundImage ? 'bg-gray-900' : ''}`}
        style={{
            // Use backgroundImage and url()
            backgroundImage: genre.backgroundImage ? `url(${genre.backgroundImage})` : 'none',
            backgroundBlendMode: "overlay"
        }}
    >
      <div className="w-full max-w-7xl mx-auto p-2">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-lato font-extrabold mb-9">
          {genre.name === "PLWF" ? "PLAY WITH FRIENDS" : genre.name}
        </h2>
      </div>

      <Swiper
        modules={[FreeMode]} // Only FreeMode needed for manual drag
        loop={false} // Explicitly disable infinite loop for all carousels
        freeMode={true} // Allows free dragging with momentum (stops at ends)
        slidesPerView="auto" // Crucial for responsive and varied slide widths
        spaceBetween={24} // Corresponds to Tailwind's 'mr-6' or 'gap-6' (24px)
        grabCursor={true} // Changes cursor to grabbing hand
        className="w-full will-change-transform" // Swiper needs a defined width
        slidesOffsetBefore={swiperStartPadding} // Dynamic left offset for alignment

        // For finite scroll, we want to ensure the scroll stops correctly
        // and the last element is visible. slidesOffsetAfter helps with this.
        // It should match slidesOffsetBefore to create symmetric padding.
        slidesOffsetAfter={swiperStartPadding}
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={`${genre.name}-${index}`} // Unique key for each slide
            // Explicitly set width and height for SwiperSlide to control image size
            style={{
                width: `${slideDimensions[0]}px`,
                height: `${slideDimensions[1]}px`,
            }}
            className="flex-shrink-0 overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={src}
              alt={`Game ${genre.name} ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default function GameListCarousel() {
  // The logic for carouselLeftPadding is now handled internally by SliderRow
  // via swiperStartPadding, so this specific variable is no longer needed here.
  // The responsive styling for SwiperSlide dimensions is still set on the parent div.
  return (
    <div
      className="relative min-h-screen flex flex-col bg-[#003087] overflow-hidden"
      // Set CSS variables for responsive dimensions for SwiperSlide
      style={{
          '--swiper-slide-width-base': `${breakpoints.default[0]}px`,
          '--swiper-slide-height-base': `${breakpoints.default[1]}px`,
          '@media (min-width: 640px)': {
              '--swiper-slide-width-base': `${breakpoints.sm[0]}px`,
              '--swiper-slide-height-base': `${breakpoints.sm[1]}px`,
          },
          '@media (min-width: 768px)': {
              '--swiper-slide-width-base': `${breakpoints.md[0]}px`,
              '--swiper-slide-height-base': `${breakpoints.md[1]}px`,
          },
          '@media (min-width: 1024px)': {
              '--swiper-slide-width-base': `${breakpoints.lg[0]}px`,
              '--swiper-slide-height-base': `${breakpoints.lg[1]}px`,
          },
          '@media (min-width: 1280px)': { // xl breakpoint
              '--swiper-slide-width-base': `${breakpoints.xl[0]}px`,
              '--swiper-slide-height-base': `${breakpoints.xl[1]}px`,
          },
      }}
    >
      {/* Particles components */}
      {/* <ParticlesBackgroundTri /> */}
      {/* <ParticlesBackground1 /> */}

      <div className="relative z-10">
        {genres.map((genre, index) => (
          <SliderRow key={index} genre={genre} />
        ))}
      </div>
    </div>
  );
}