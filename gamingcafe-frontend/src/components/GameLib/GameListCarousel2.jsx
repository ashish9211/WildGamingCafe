import React, { useEffect, useRef, useState, useCallback } from "react";
import ParticlesBackgroundTri from "../Animations/ParticlesBackgroundTri";
import ParticlesBackground1 from "../Animations/ParticleBackground1";

const genres = [
  { name: "FEATURED", sectionId: "featured-games", bgColor: "rgba(220, 20, 60, 0.7)" },
  { name: "MULTIPLAYER", sectionId: "multiplayer-games", bgColor: "rgba(65, 105, 225, 0.7)" },
  { name: "SINGLEPLAYER", sectionId: "singleplayer-games", bgColor: "rgba(50, 205, 50, 0.7)" },
  { name: "FIGHTING", sectionId: "fighting-games", bgColor: "rgba(255, 140, 0, 0.7)" },
  { name: "SHOOTERS", sectionId: "shooters-games", bgColor: "rgba(106, 90, 205, 0.7)" },
  { name: "RTS", sectionId: "rts-games", bgColor: "rgba(218, 165, 32, 0.7)" },
  { name: "RPG", sectionId: "rpg-games", bgColor: "rgba(128, 0, 128, 0.7)" },
  { name: "SPORTS", sectionId: "sports-games", bgColor: "rgba(0, 128, 0, 0.7)" },
];

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

const itemBaseWidth = 100;
const itemBaseHeight = 150;

function SliderRow({ genre }) {
  const contentWrapperRef = useRef(null);
  const images = genreImages[genre.name] || [];
  const [clonedImages, setClonedImages] = useState([]);

  const getAnimationDuration = useCallback(() => {
    const width = window.innerWidth;
    if (width <= 768) return '60s';
    if (width <= 1024) return '50s';
    return '40s';
  }, []);

  const [animationDuration, setAnimationDuration] = useState(getAnimationDuration());

  const getCloneCount = useCallback((currentWidth) => {
    if (images.length === 0) return 0;
    const visibleItems = currentWidth / (itemBaseWidth + 24); // itemWidth + gap-6 (24px)
    // Ensure enough clones to span beyond the viewport width to avoid gaps when scrolling
    return Math.ceil((visibleItems * 2) / images.length) + 2; // Increased clone count slightly
  }, [images.length]);

  const updateClonesAndAnimation = useCallback(() => {
    if (images.length === 0) {
      setClonedImages([]);
      return;
    }

    const cloneCount = getCloneCount(window.innerWidth);
    const newClonedImages = [];
    for (let i = 0; i < cloneCount; i++) {
      newClonedImages.push(...images);
    }
    setClonedImages(newClonedImages);
    setAnimationDuration(getAnimationDuration());

  }, [images, getCloneCount, getAnimationDuration]);

  useEffect(() => {
    updateClonesAndAnimation();
    const handleResize = () => updateClonesAndAnimation();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateClonesAndAnimation]);

  return (
    <div
      id={genre.sectionId}
      className="py-8 bg-cover bg-center relative overflow-hidden" // Outer div for section background and overall overflow
      style={{
        backgroundColor: genre.bgColor,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Container for the genre title, ALIGNED with GameListBlocks content start */}
      <div className="w-full max-w-7xl mx-auto p-2">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          {genre.name}
        </h2>
      </div>

      {/* Carousel container - it will start aligned but FLOW to the right edge */}
      <div className="relative w-full overflow-hidden group">
        <div
          className={`flex whitespace-nowrap animate-[scroll_var(--animation-duration)_linear_infinite] group-hover:[animation-play-state:paused]
                     pl-4 sm:pl-6 md:pl-8 lg:pl-[calc((100vw-1280px)/2+8px)] {/* Dynamic left padding for ALIGNMENT */}
                     `}
          ref={contentWrapperRef}
          style={{ '--animation-duration': animationDuration }}
        >
          {[...images, ...clonedImages].map((src, idx) => (
            <div
              key={`${genre.name}-${idx}`}
              className="relative
                         w-[100px] h-[150px] sm:w-[120px] sm:h-[180px] md:w-[140px] md:h-[210px] lg:w-[160px] lg:h-[240px]
                         flex-shrink-0 overflow-hidden shadow-lg cursor-pointer
                         mr-6
                        "
            >
              <img
                src={src}
                alt={`${genre.name}-${idx}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GameListCarousel() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#003087] overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

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