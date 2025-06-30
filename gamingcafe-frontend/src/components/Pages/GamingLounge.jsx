import TitleBox from '../EXTRAS/TitleBox';
import TitleBoxnoImg from '../EXTRAS/TitleBoxnoImg';
import TitleBoxrev from '../EXTRAS/TitleBoxrev';
const cardClasses = "relative w-full max-w-3xl h-[280px] border-4 border-white bg-white/10 backdrop-blur-sm rounded-md flex items-center px-6 md:px-12";
const GamingLounge =() =>{
    return(
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background animation layers */}
      <div className="sliding-bg"></div>
      <div className="sliding-bg bg2"></div>
      <div className="sliding-bg bg3"></div>
      
      {/* Optional content area – keep empty or add future components */}
       <div className="flex-grow flex-col justify-center items-center z-10 relative">
        <section className="pt-24 md:pt-32 lg:pt-36">
                <TitleBoxrev  />
                <TitleBox  />
                <TitleBoxnoImg/>
        </section>        
      </div>


    </div>
      
  );
};

export default GamingLounge;