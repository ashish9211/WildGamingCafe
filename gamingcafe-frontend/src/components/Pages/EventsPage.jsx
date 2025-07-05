import video from '../../assets/comingsoon.mp4'
import ParticleBackLive from '../Animations/ParticleBackLive';
const EventsPage = () =>{
    return (
    // <div className="w-full h-screen bg-black flex items-center justify-center">
    //   {/* <video
    //     src={video}
    //     autoPlay
    //     loop
    //     muted
    //     className="w-full h-full object-cover"
    //   /> */}
    //   <div className="absolute inset-0 z-10 pointer-events"><ParticleBackLive/></div>
      
    //   {/* Optional overlay text */}
    //   <div className="absolute inset-0 flex flex-col items-center justify-center">
    //     <h1 className="text-white text-[72px] md:text-[120px] font-poppins font-extrabold ">
    //       Under Construction
    //     </h1>
    //     <p className='font-lato font-semibold text-white text-[48px]'>SEE YOU SOON!!</p>
    //   </div>
    // </div>

    
    <div className="w-screen h-screen flex justify-center items-center bg-black dark:bg-white">
      <h1 className="relative w-full xl:text-9xl md:text-8xl text-5xl sm:tracking-[17px] tracking-[10px] uppercase text-center leading-[0.70em] outline-none animate-dimlight box-reflect">
        Coming Soon
      </h1>
    </div>


  );
};
export default EventsPage;