import video from '../../assets/comingsoon.mp4'
import ParticleBackLive from '../Animations/ParticleBackLive';
const EventsPage = () =>{
    return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {/* <video
        src={video}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      /> */}
      <div className="absolute inset-0 z-10 pointer-events"><ParticleBackLive/></div>
      
      {/* Optional overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-[72px] md:text-[120px] font-poppins font-extrabold ">
          Under Construction
        </h1>
        <p className='font-lato font-semibold text-white text-[48px]'>SEE YOU SOON!!</p>
      </div>
    </div>
  );
};
export default EventsPage;