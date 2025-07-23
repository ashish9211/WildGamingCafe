import React from 'react';

// 1. Import your static images here
// Make sure these paths are correct relative to this file
import gacs from '../../assets/events/GACS.png';
import valorant from '../../assets/events/valorant.png'; // Assuming you have a valorant.png
import fortnite from '../../assets/events/fortnite.png'; // Assuming you have a fortnite.png
import league from '../../assets/events/lol.jpg';     // Assuming you have a league.png
import dota2  from '../../assets/events/dota2.avif'; 
import comingSoon from '../../assets/events/comingsoon3.webp';      // Assuming you have a smash.png

// Dummy data for events - NOW USING IMPORTED IMAGES
const events = [
  // {
  //   id: 1,
  //   image: gacs, // Referencing the imported image variable
  //   title: 'GA:CS | Operation Freedom',
  //   subtitle: 'GA:CS RETURNS',
  //   description: 'OPERATION FREEDOM LANDS AT GA IN JULY 2025.',
  //   prize: 'With up to $2000 Prizing!',
  //   entry: '$250 Team Entry',
  //   pool: 'Tiered Prize Pool',
  //   cap: '16 Team Cap',
  //   link: '#', // Placeholder link
  // },
  // {
  //   id: 2,
  //   image: valorant, // Referencing the imported image variable
  //   title: 'Valorant Ascendant Clash',
  //   subtitle: 'SUMMER SHOWDOWN',
  //   description: 'DOMINATE THE RANKS IN OUR VALORANT TOURNAMENT.',
  //   prize: 'Up to $1500 Cash Prize!',
  //   entry: '$150 Per Player',
  //   pool: 'Single Elimination',
  //   cap: '32 Player Cap',
  //   link: '#',
  // },
  // {
  //   id: 3,
  //   image: fortnite, // Referencing the imported image variable
  //   title: 'Fortnite Build Battle Royale',
  //   subtitle: 'CROWN YOURSELF KING',
  //   description: 'BUILD, BATTLE, AND BE THE LAST ONE STANDING!',
  //   prize: 'Exclusive In-Game Rewards!',
  //   entry: 'Free Entry',
  //   pool: 'Solo Battle',
  //   cap: 'No Cap',
  //   link: '#',
  // },
  // {
  //   id: 4,
  //   image: league, // Referencing the imported image variable
  //   title: 'League of Legends Nexus Blitz',
  //   subtitle: 'ARAM TOURNAMENT',
  //   description: 'TEST YOUR SKILLS IN FAST-PACED NEXUS BLITZ!',
  //   prize: 'Riot Points & Skins!',
  //   entry: '$100 Team Entry',
  //   pool: 'Double Elimination',
  //   cap: '8 Team Cap',
  //   link: '#',
  // },
  // {
  //   id: 5,
  //   image: dota2, // Referencing the imported image variable
  //   title: 'DOTA 2',
  //   subtitle: 'DEFENCE OF THE ANCIENTS',
  //   description: 'COMPETE 5 vs 5 until you defeat enemy throne or be defeated!',
  //   prize: '$500 Prize Pool!',
  //   entry: '$20 Entry',
  //   pool: 'Bracket Elimination',
  //   cap: '60 Player Cap',
  //   link: '#',
  // },
];

// Individual Event Card Component (remains the same as before)
const EventCard = ({ event }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105">
      {/* Event Image as Background */}
      <div
        className="relative h-56 sm:h-64 md:h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${event.image})` }} // event.image now holds the imported image URL
      >
        {/* Optional: Overlay for text readability on image */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Event Details */}
      <div className="p-4 flex flex-col flex-grow font-montserrat">
        <h3 className="text-xl sm:text-2xl font-bold  text-white mb-2 leading-tight">
          {event.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-300 mb-1 font-semibold">
          {event.subtitle}
        </p>
        <p className="text-sm text-gray-400 mb-3 flex-grow">
          {event.description}
        </p>

        {/* Prize and Entry Details */}
        <ul className="text-sm text-gray-200 mb-4 space-y-1">
          <li><span className="font-semibold">Prize:</span> {event.prize}</li>
          <li><span className="font-semibold">Entry:</span> {event.entry}</li>
          <li><span className="font-semibold">Pool:</span> {event.pool}</li>
          <li><span className="font-semibold">Cap:</span> {event.cap}</li>
        </ul>

        {/* Link */}
        <a
          href={event.link}
          className="inline-block text-blue-400 hover:text-blue-300 font-bold text-sm transition-colors duration-200"
        >
          For more information and team registration click HERE!
        </a>
      </div>
    </div>
  );
};

// NEW: ComingSoonCard Component
const ComingSoonCard = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105">
      {/* Image Section - styled like your EventCard image */}
      <div
        className="relative h-56 sm:h-64 md:h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${comingSoon})` }} // Using the imported placeholder image
      >
        {/* Optional: Overlay for text readability on image */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <p className="text-white text-3xl sm:text-4xl font-extrabold font-heading drop-shadow-lg">
                Stay Tuned!
            </p>
        </div>
      </div>

      {/* Content Section - styled like your EventCard content */}
      <div className="p-4 flex flex-col flex-grow font-montserrat justify-center items-center text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
          New Events Brewing...
        </h3>
        <p className="text-sm sm:text-base text-gray-400 mb-3">
          We're working hard to bring you exciting new competitions and gatherings.
        </p>
        <p className="text-xs text-gray-500">
          Follow our social media for the latest announcements!
        </p>
        {/* You could add social media icons/links here */}
      </div>
    </div>
  );
};


// Main Featured Event Section Component (remains the same)
const FeaturedEvent = () => {
  return (
    <section className="bg-black w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-6xl md:text-[56px] lg:text-[72px] font-poppins font-bold leading-tight tracking-tight text-white break-words">
            FEATURED EVENTS
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.length > 0 ? (
            // Render actual events if there are any
            events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            // Render the ComingSoonCard if there are no events
            <ComingSoonCard />
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvent;