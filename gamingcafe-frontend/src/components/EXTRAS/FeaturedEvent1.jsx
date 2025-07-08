import React from 'react';
import backgroundImage from '../../assets/events/featuredevent1.jpg';
export default function FeaturedEvent() {
  // Replace with your actual background image URL
  // This Unsplash image is a good placeholder for a gaming theme
  
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden p-4">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        aria-hidden="true" // Hide from screen readers as it's decorative
      >
        {/* Semi-transparent black overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content (Text and Button) */}
      {/* z-10 ensures this content is above the background and overlay */}
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
        {/* "FEATURED EVENT" Heading */}
        <h3 className="text-base sm:text-lg md:text-xl font-semibold uppercase tracking-widest mb-2">
          FEATURED EVENT
        </h3>

        {/* Event Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          The Grand Gaming Showdown 2025
        </h2>

        {/* Date and Time */}
        <p className="text-base sm:text-lg md:text-xl mb-8 font-medium">
          July 20, 2025 | 7:00 PM EST
        </p>

        {/* Call-to-Action Button */}
        <a
          href="/events/grand-showdown" // Replace with actual event link
          className="inline-block px-10 py-4 border-2 border-white text-white text-lg font-bold uppercase transition-colors duration-300 hover:bg-white hover:text-black rounded-md shadow-lg"
        >
          VIEW EVENT
        </a>
      </div>
    </section>
  );
}