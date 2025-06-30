import React, { useEffect, useRef, useState } from "react";
import ParticlesBackgroundTri from "../Animations/ParticlesBackgroundTri";
import ParticlesBackground1 from "../Animations/ParticleBackground1";

// Genre config
const genres = [
  { name: "FEATURED" },
  { name: "MULTIPLAYER" },
  { name: "SINGLEPLAYER" },
  { name: "FIGHTING" },
  { name: "SHOOTERS" },
  { name: "RTS" },
  { name: "RPG" },
  { name: "SPORTS" },
];

// Utility to load images from assets/slideImages/[GENRE]/*

const imageModules = import.meta.glob("../../assets/slideImages/*/*.{jpg,jpeg,png,svg}", {
  eager: true,
  import: "default"
});

const genreImages = {};

for (const path in imageModules) {
  const match = path.match(/slideImages\/([^/]+)\/[^/]+$/);
  if (match) {
    const genre = match[1];
    if (!genreImages[genre]) genreImages[genre] = [];
    genreImages[genre].push(imageModules[path]);
  }
}
const itemWidth = 238;

function SliderRow({ genre }) {
  const contentRef = useRef(null);
  const [bgImage, setBgImage] = useState(null);
  const images = genreImages[genre.name] || [];

  const manageChildren = (childCount) => {
    const content = contentRef.current;
    if (!content) return;

    while (content.children.length > images.length) {
      content.removeChild(content.lastChild);
    }

    for (let i = 0; i < childCount; i++) {
      for (let j = 0; j < images.length; j++) {
        const clone = content.children[j].cloneNode(true);
        content.appendChild(clone);
      }
    }

    content.style.width = `${itemWidth * images.length * (childCount + 1)}px`;
  };

  const core = (width) => {
    if (width <= 1920) manageChildren(2);
    else if (width <= 2560) manageChildren(3);
    else if (width <= 3840) manageChildren(4);
    else manageChildren(8);
  };

  useEffect(() => {
    core(window.innerWidth);
    const handleResize = () => core(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  return (
    <div
      className="pl-48 py-8 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
    >
      <h2 className="text-white text-5xl font-bold mb-6 bg-transparent">{genre.name}</h2>
      <div className="relative w-full overflow-hidden group">
        <div
          className="flex whitespace-nowrap animate-[scroll_100s_linear_infinite] group-hover:[animation-play-state:paused]"
          ref={contentRef}
        >
          <div className="flex gap-6 flex-shrink-0 pr-6">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="relative w-[150px] h-[225px] flex-shrink-0 overflow-hidden shadow-lg cursor-pointer"
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
      <div className="relative  min-h-screen bg-transparent">
        {genres.map((genre, index) => (
          <SliderRow key={index} genre={genre} />
        ))}
      </div>
      </div>

    
  );
}