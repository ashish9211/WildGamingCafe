import video from '../../assets/comingsoon.mp4'
import ParticleBackLive from '../Animations/ParticleBackLive';
import './EventsPage.css';
import EventCard from '../utility/EventCard'; // 
import gacs from '../../assets/events/GACS.png';
import valorant from '../../assets/events/valorant.png';
import comingSoon from '../../assets/events/comingsoon3.webp'; 
import {useState} from 'react';

const EventsPage = () =>{

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

  const events = [
    // {
    //     id: 1,
    //     image: gacs, // Referencing the imported image variable
    //     title: 'GA:CS | Operation Freedom',
    //     subtitle: 'GA:CS RETURNS',
    //     description: 'OPERATION FREEDOM LANDS AT GA IN JULY 2025.',
    //     prize: 'With up to $2000 Prizing!',
    //     entry: '$250 Team Entry',
    //     pool: 'Tiered Prize Pool',
    //     cap: '16 Team Cap',
    //     link: '#', // Placeholder link
    //   },
    //   {
    //     id: 2,
    //     image: valorant, // Referencing the imported image variable
    //     title: 'Valorant Ascendant Clash',
    //     subtitle: 'SUMMER SHOWDOWN',
    //     description: 'DOMINATE THE RANKS IN OUR VALORANT TOURNAMENT.',
    //     prize: 'Up to $1500 Cash Prize!',
    //     entry: '$150 Per Player',
    //     pool: 'Single Elimination',
    //     cap: '32 Player Cap',
    //     link: '#',
    //   },
    // Add more events here
  ]; 
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNext = () => {
        // Only allow navigation if there are events
        if (events.length > 0) {
              setCurrentCardIndex((prevIndex) => (prevIndex + 1) % events.length);
  }};

  const handlePrev = () => {
        // Only allow navigation if there are events
        if (events.length > 0){
           setCurrentCardIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  }};

  const cardToDisplay = events.length > 0
        ? <EventCard event={events[currentCardIndex]} />
        : <ComingSoonCard />;
  return (
       
    // <div className="w-screen h-screen flex justify-center items-center bg-black ">
    //   <h1 className="relative w-full xl:text-9xl md:text-8xl text-5xl sm:tracking-[17px] tracking-[10px] uppercase text-center leading-[0.70em] outline-none animate-dimlight box-reflect">
    //     Coming Soon
    //   </h1>
    // </div>

    <section className="events-section">
      <div className="events-content-wrapper">
        <div className="left-half">
          <h1 className='font-poppins font-extrabold animated-underline'>EVENTS</h1>
          <p className='font-montserrat font-semibold '>
            Join us for an exciting array of upcoming events! From workshops and seminars to community gatherings and celebrations, there's always something happening. Explore our calendar and mark your dates to be part of memorable experiences.
          </p>
        </div>
        <div className="right-half">
          {/* Card Container for centering and padding */}
          <div className="card-container">
             {cardToDisplay}
          </div>

          {/* Navigation Buttons */}
          {events.length > 1 &&
          <div className="nav-buttons">
            <button
              onClick={handlePrev}
              className="nav-button"
              disabled={events.length <= 1} // Disable if only one card
            >
              &#8249; {/* Left arrow HTML entity */}
            </button>
            <button
              onClick={handleNext}
              className="nav-button"
              disabled={events.length <= 1} // Disable if only one card
            >
              &#8250; {/* Right arrow HTML entity */}
            </button>
          </div>
          } 
        </div>
          
      </div>
    </section>
  );
};
export default EventsPage;