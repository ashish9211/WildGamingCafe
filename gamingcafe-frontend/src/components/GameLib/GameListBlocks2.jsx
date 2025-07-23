import React from "react";

// Import your genre thumbnail images
// IMPORTANT: Replace these with your actual image paths from your assets folder!
import featuredThumb from "../../assets/gamelibgenre/cod.jpg";
import multiplayerThumb from "../../assets/gamelibgenre/multiplayer-2.jpg";
import singleplayerThumb from "../../assets/gamelibgenre/singleplayer-3.jpg";
import fightingThumb from "../../assets/gamelibgenre/fighting.avif";
import shootersThumb from "../../assets/gamelibgenre/console-gaming-2.jpg";
import rtsThumb from "../../assets/gamelibgenre/playwfriends-1.avif";
import rpgThumb from "../../assets/gamelibgenre/racing-1.jpg";
import sportsThumb from "../../assets/gamelibgenre/sports-1.1.png";
import ParticleBackLive from "../Animations/ParticleBackLive";

const genres = [
  { name: "FEATURED", image: featuredThumb, sectionId: "featured-games" },
  { name: "MULTIPLAYER", image: multiplayerThumb, sectionId: "multiplayer-games" },
  { name: "SINGLEPLAYER", image: singleplayerThumb, sectionId: "singleplayer-games" },
  { name: "FIGHTING", image: fightingThumb, sectionId: "fighting-games" },
  { name: "PLAYSTATION", image: shootersThumb, sectionId: "ps-games" },
  { name: "PLAY WITH YOUR FRIENDS", image: rtsThumb, sectionId: "friends-games" },
  { name: "RACING", image: rpgThumb, sectionId: "race-games" },
  { name: "SPORTS", image: sportsThumb, sectionId: "sports-games" },
];

export default function GameListBlocks() {
  return (
    // Height is now completely flexible (h-auto implied by no height class)
    // Relying on py-4 to give it vertical space.
    <section className="bg-black flex items-center justify-center py-20 px-2">
         <div className="w-full max-w-7xl h-full grid
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                    grid-rows-auto gap-5
                    p-2">
        {genres.map((genre, index) => (
          <a
            key={index}
            href={`#${genre.sectionId}`}
            className="relative flex items-center justify-center
                       h-16 sm:h-20 md:h-24 lg:h-28
                       overflow-hidden shadow-lg
                       group cursor-pointer
                       mx-auto max-w-[calc(100%-20px)] w-full

                       ring-0 ring-white ring-offset-0 ring-offset-black transition-all duration-300 ease-in-out {/* Transition for ring only */}
                       hover:ring-4 hover:ring-offset-4 hover:shadow-xl
                      "
          >
            {/* NEW: Inner div for background image and zoom effect */}
            <div
              className="absolute inset-0 bg-cover bg-center 
                         transform transition-transform duration-300 ease-in-out {/* Transition for zoom effect */}
                         group-hover:scale-110 {/* Zoom in on hover */}
                         "
              style={{ backgroundImage: `url(${genre.image})` }}
            ></div>

            {/* Overlay for readability - ensure it's above the image but below text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-opacity duration-300"></div>

            {/* Text content */}
            <div className="relative z-10 text-white font-lato text-xs sm:text-sm md:text-base lg:text-lg uppercase font-extrabold text-center px-1">
              {genre.name}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}