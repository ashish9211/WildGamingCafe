// src/components/BeachWaveAnimation.jsx
import React from 'react';
import './BeachWaveAnimation.css'; // Import the CSS file you'll create

const BeachWaveAnimation = () => {
  return (
    <div className="beach-animation-container">
      {/* Wave Layers - add or remove more as desired for depth */}
      <div className="wave-layer wave-1"></div>
      <div className="wave-layer wave-2"></div>
      <div className="wave-layer wave-3"></div>
      <div className="wave-layer wave-4"></div>
      <div className="wave-layer wave-5"></div>
      <div className="wave-layer wave-6"></div> {/* Added more layers for more shades */}
      <div className="wave-layer wave-7"></div> {/* Added more layers for more shades */}
    </div>
  );
};

export default BeachWaveAnimation;