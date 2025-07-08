import ParticlesBackgroundTri from "../Animations/ParticlesBackgroundTri";
import ParticleBackLive from '../Animations/ParticleBackLive';
import EventParticles from "../Animations/EventParticles";
const EventSection = () => {
     return (

<section className="bg-black w-full flex items-center relative">
             
  <div className="absolute inset-0 z-0 pointer-events-none">
        <EventParticles />
      </div>
  <div className=" mx-auto px-4 py-8 flex flex-col md:flex-row flex-wrap items-center justify-center gap-8">

    {/* Text in center */}
    <div className="text-center px-4 sm:px-6 flex-1 min-w-[280px]">
        <h1 className="mb-4 text-2xl sm:text-4xl md:text-5xl lg:text-[83px] font-poppins font-semibold leading-tight tracking-tight text-white break-words animated-underline">
            EVENTS
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-montserrat font-semibold text-white leading-relaxed max-w-2xl mx-auto break-normal">
            Your go-to destination for casual gaming, competitive tournaments, and unforgettable LAN events. Whether you're dropping in for solo sessions or joining our weekly matchups, our café is built for gamers of all levels.
            <br /><br />Join us for regular tournaments, launch events, and exclusive gaming nights—where every session is an opportunity to level up.
        </p>
    </div>

    {/* Buttons to the right of text */}
    <div className="flex flex-col gap-4 md:ml-8 flex-shrink-0 min-w-[150px]">
        <a
          
          href={'/events'}
          className="relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-white rounded-none group bg-gradient-to-br from-cyan-500 to-blue-500 hover:text-white focus:ring-4 focus:ring-cyan-200"
        >
          <span className="relative px-5 py-2.5 font-extrabold font-lato bg-black  group-hover:bg-transparent min-w-[150px] text-center">
            EVENTS
          </span>
        </a>
      
    </div>

  </div>
</section>
     );
};

export default EventSection;