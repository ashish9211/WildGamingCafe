import React, { useEffect, useState } from "react";
import ParticleBackLive from "../Animations/ParticleBackLive";
import ParticlesBackgroundTri from "../Animations/ParticlesBackgroundTri";

const genres = [
  "FEATURED",
  "MULTIPLAYER",
  "SINGLEPLAYER",
  "FIGHTING",
  "SHOOTERS",
  "RTS",
  "RPG",
  "SPORTS",
];

// Dynamically import all images under /slideImages/*
const imageModules = import.meta.glob(
  "../../assets/slideImages/*/*.{jpg,jpeg,png,svg}",
  { eager: true, import: "default" }
);

// Group images by genre (folder name)
const genreImages = {};
for (const path in imageModules) {
  const match = path.match(/slideImages\/([^/]+)\/[^/]+$/);
  if (match) {
    const genre = match[1];
    if (!genreImages[genre]) genreImages[genre] = [];
    genreImages[genre].push(imageModules[path]);
  }
}

export default function GameListBlocks() {
  const [currentIndexes, setCurrentIndexes] = useState(() => {
    const initial = {};
    genres.forEach((g) => {
      initial[g] = 0;
    });
    return initial;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prev) => {
        const updated = {};
        for (const genre of genres) {
          const imgs = genreImages[genre] || [];
          updated[genre] = (prev[genre] + 1) % imgs.length;
        }
        return updated;
      });
    }, 15000); // 15 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[350px] bg-black flex items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
                {/* <ParticlesBackgroundTri /> */}
                <ParticleBackLive/>
              </div>
      <div className="w-3/5 h-3/5 grid grid-cols-4 grid-rows-2 gap-12 ">
        {genres.map((genre, index) => {
          const images = genreImages[genre] || [];
          const bgImage = images[currentIndexes[genre] % images.length];

          return (
            <div
              key={index}
              className="gList relative shadow-md text-white text-lg font-semibold flex items-center justify-center overflow-hidden bg-center bg-cover transition-all duration-500"
              style={{
                backgroundImage: bgImage ? `url(${bgImage})` : "none",
              }}
            >
              <div className="bg-black text-white bg-opacity-50 px-4 py-2 font-lato text-sm md:text-sm uppercase font-extrabold">
                {genre}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}