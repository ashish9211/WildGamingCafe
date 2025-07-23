import bgImage from '../../assets/aigamer.jpg';
import { useState } from 'react';

import {FaChevronDown } from 'react-icons/fa';
import LogoColors from '../Animations/LogoColors';
import '../Animations/StarryDrip.css';
import starrynight from '../../assets/starrynight.jpg';

export default function Contact() {
  const drawers = [
    { label: 'General Inquiries', content: 'For general questions, email us at wildgamingcafe@gmail.com.' },
     { label: 'Tournaments', content: 'Need a venue for your next tournament? We’ve got you covered. Send us an email at wildgamingcafe@gmail.com' },
    // { label: 'Collaborations', content: 'Interested in collaborating? Reach out at partners@wildgamingcafe.com.' },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT PANEL */}
      <section
        className="w-full md:w-3/5 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex flex-col h-full pt-12 md:pt-16 items-center justify-start md:justify-center px-4 md:px-0">
          <h1 className="text-3xl font-poppins font-extrabold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  text-white text-center">
            CONTACT
          </h1>
          <div className="mt-8 md:mt-16 w-full max-w-lg px-0 md:px-8">
            <div className="border-t-2 border-white divide-y-2 divide-white">
              {drawers.map((d, i) => (
                <div key={i}>
                  <button
                    className="w-full h-12 flex items-center justify-between text-white font-poppins font-semibold px-4"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span>{d.label}</span>
                    <FaChevronDown
                      className={`transform transition-transform ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="py-4 text-white font-montserrat font-medium px-4 md:px-8">
                      <p>{d.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RIGHT PANEL */}
      <aside className="relative w-full bg-black md:w-2/5 flex items-start md:items-center justify-center py-8 md:py-16 px-4 overflow-hidden">
          <div class="lines absolute inset-0 z-0">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        <div className="text-white w-full max-w-md space-y-6  z-10 ">
          {/* Phone */}
          <div>
            <h3 className="text-xl sm:text-2xl font-montserrat font-extrabold animated-underline mb-1">Phone:</h3>
            <p className="text-xl  font-semibold font-lato  sm:text-xl">+91-9381923198</p>
          </div>
          {/* Hours */}
          <div>
            <h3 className="text-xl sm:text-2xl font-montserrat font-extrabold animated-underline mb-1">Hours:</h3>
            <p className="text-lg sm:text-xl font-lato font-semibold leading-relaxed">
              Mon–Sun:  9 AM–11 PM
              
            </p>
          </div>
          {/* Address */}
          <div>
            <h3 className="text-xl sm:text-2xl font-montserrat font-extrabold animated-underline mb-1">Address:</h3>
            <p className="text-lg sm:text-xl font-lato font-semibold leading-relaxed">
              Wild Gaming Cafe, 209, 2nd Floor,<br />
              Vaishnavi Lamani Arcade, Dulapally Road,<br />
              Above Ratnadeep Supermarket,<br />
              Kompally, Hyderabad,<br />
              Telangana - 500014.
            </p>
          </div>
          {/* Embedded Map */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.2894872262254!2d78.486111175657!3d17.541398798349206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb85f43122e41d%3A0xde00e593dae562af!2sWILD%20GAMING%20CAFE!5e0!3m2!1sen!2sus!4v1751002753240!5m2!1sen!2sus"
              className="w-full h-56 sm:h-56 md:h-72 rounded-md border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wild Gaming Cafe Location"
            />
          </div>
        </div>
      </aside>
    </main>
  );
}
