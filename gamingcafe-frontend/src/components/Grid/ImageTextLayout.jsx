import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ParticlesBackgroundTri from "../Animations/ParticlesBackgroundTri";
import heroImg1 from "../../assets/lounge21.jpg";
import heroImg from "../../assets/lounge1.jpg"; // Add your image path
const ImageTextLayout = ()=>{
    const location = useLocation();

    useEffect(() => {
    // Scroll to section if hash exists
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
    return (
        <>
          {/* <div className="absolute inset-0 z-0 pointer-events-none bg-blue-600">
              <ParticlesBackgroundTri />
          </div> */}
          <div className="relative min-h-screen flex flex-col overflow-hidden">
      
                <div className="sliding-bg"></div>
                <div className="sliding-bg bg2"></div>
                <div className="sliding-bg bg3"></div>
      
            <section className="w-full max-w-5xl h-full z-10 mx-auto mt-[25vh] mb-[20vh] px-8">
                {/* Image for small screens - on top */}
                <div className="md:hidden mb-6 z-20">
                    <img
                        src={heroImg}
                        alt="Setup"
                        className="w-full h-64 object-cover rounded-lg shadow-xl"
                    />
                </div>
                
                <div className="relative w-full h-fit">
                    {/* Image for larger screens - portrait mode */}
                    <div className="hidden md:block absolute -top-8 -left-16 w-[560px] h-[750px] z-20">
                        <img
                            src={heroImg}
                            alt="Setup"
                            className="w-full h-full object-cover rounded-lg shadow-xl transition-all duration-300"
                        />
                    </div>
                    
                    <div className="bg-blue-700 bg-opacity-25 w-full max-w-[85%] md:max-w-full h-[140px] rounded-md border-8 border-white mx-auto" />
                    
                    <div className="bg-black text-white w-full max-w-[75%] md:max-w-[90%] h-[160px] flex items-center justify-center md:justify-end rounded-md p-4 sm:p-6 -mt-24 md:-mt-20 mr-4 ml-auto md:mx-auto md:ml-16 z-10 relative">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold font-poppins uppercase text-center md:text-right">
                            THE SETUP
                        </h2>
                    </div>
                    
                    {/* Description text - positioned below black box and after image */}
                    <div className="mt-8 md:mt-12 md:ml-[560px] max-w-[90%] md:max-w-[calc(100%-560px)] mx-auto md:mx-0 px-4 md:px-0">
                        <p className="text-white text-base font-montserrat font-semibold md:text-lg leading-relaxed text-center md:text-left">
                            Step into the ultimate gaming universe. Our cafe is equipped with cutting-edge PC setups and a diverse array of console stations, featuring the latest Xbox and PlayStation 5 systems, alongside other popular consoles. Get ready for unparalleled immersion and unforgettable gaming moments.
                        </p>
                    </div>
                </div>

             
              
            </section>
            
            

            <section id="games" className="w-full max-w-5xl h-full z-10 mx-auto mt-[8vh] md:mt-[25vh] mb-[8vh] md:mb-[25vh] px-8">
                 {/* Image for small screens - on top */}
                 <div className="md:hidden mb-6 z-20">
                     <img
                         src={heroImg1}
                         alt="Games"
                         className="w-full h-64 object-cover rounded-lg shadow-xl"
                     />
                 </div>
                 
                 <div className="relative w-full h-fit">
                     {/* Image for larger screens - portrait mode (mirrored to right) */}
                     <div className="hidden md:block absolute -top-8 -right-16 w-[560px] h-[750px] z-20">
                         <img
                             src={heroImg1}
                             alt="Games"
                             className="w-full h-full object-cover rounded-lg shadow-xl transition-all duration-300"
                         />
                     </div>
                     
                     <div className="bg-blue-700 bg-opacity-25 w-full max-w-[85%] md:max-w-full h-[140px] rounded-md border-8 border-white mx-auto relative" />
                     
                     <div className="bg-black text-white w-full max-w-[75%] md:max-w-[90%] h-[160px] flex items-center justify-center md:justify-start rounded-md p-4 sm:p-6 -mt-24 md:-mt-20 mr-4 ml-auto md:mx-auto md:mr-16 z-10 relative">
                         <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold font-poppins uppercase text-center md:text-left">
                             THE GAMES
                         </h2>
                     </div>
                     
                     {/* Description text - positioned below black box and before image */}
                     <div className="mt-8 md:mt-12 md:mr-[560px] max-w-[90%] md:max-w-[calc(100%-560px)] mx-auto md:mx-0 px-6 md:px-0">
                         <p className="text-white text-base font-montserrat font-semibold md:text-lg leading-relaxed text-center md:text-right">
                             We are constantly updating our library with new games for you to enjoy. Check out our current library below!
                         </p>
                         <div className="mt-6 text-center md:text-center">
                             <a href="/gamelibrary" className="relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-white rounded-none group hover:text-[#0682dc] focus:ring-4 focus:ring-green-200" style={{background: 'linear-gradient(to bottom right, #06dc3a, #05c233)'}}>
                                 <span className="relative px-6 py-3 font-extrabold font-lato bg-black transition-all duration-300" style={{'--tw-bg-opacity': '1'}} onMouseEnter={(e) => e.target.style.background = 'linear-gradient(to bottom right, #ff993c, #e6822e)'} onMouseLeave={(e) => e.target.style.background = 'black'}>
                                     GAMES LIBRARY
                                 </span>
                             </a>
                         </div>
                     </div>
                 </div>
            </section>

            {/* New Component Section */}
            <section id="rates" className="w-full max-w-5xl h-full z-10 mx-auto mt-[8vh] md:mt-[25vh] mb-[10vh] md:mb-[20vh] px-8 pb-16">
                <div className="relative w-full h-fit">
                    <div className="bg-blue-700 bg-opacity-25 w-full max-w-[85%] md:max-w-[90%] h-[140px] rounded-md border-8 border-white mx-auto relative" />
                     
                     <div className="bg-black text-white w-full max-w-[75%] md:max-w-[90%] h-[160px] flex items-center justify-center  rounded-md p-4 sm:p-6 -mt-24 md:-mt-20 mr-4 ml-auto md:ml-6 md:mr-16 z-10 relative">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold font-poppins uppercase text-center ">
                                THE RATES
                            </h2>
                    </div>
                    
                    {/* Content section with text and dropdowns */}
                    <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-8 max-w-[90%] mx-auto px-4 md:px-0">
                        {/* Left side - Description text */}
                        <div className="md:w-1/2">
                            <p className="text-white text-base font-montserrat font-semibold md:text-lg leading-relaxed text-center md:text-left">
                                Our PCs save the hours you purchase on your personal account, so you can<br />
                                <strong>Just Login and Play!</strong><br /><br />
                                Consoles and Racing Sims are perfect for friends and family as you purchase game time by the hour per group!<br /><br />
                                We offer a number of hourly rates to fit you and your friends -<br />
                                <strong>Check them out!</strong>
                            </p>
                        </div>
                        
                        {/* Right side - Dropdown menus */}
                        <div className="md:w-1/2 space-y-4">
                            {/* Consoles Dropdown */}
                            <details className="bg-black rounded-lg border border-gray-600">
                                <summary className="cursor-pointer p-4 text-white font-bold text-lg font-montserrat hover:bg-gray-700 rounded-lg">
                                    Consoles
                                </summary>
                                <div className="p-4 border-t border-gray-600 text-white text-sm">
                                    <p className="font-semibold font-lato mb-2">Per Hour</p>
                                    <p>₹150 1-2 Guests</p>
                                    <p>₹250 3-4 Guests</p>
                                    <p>₹300 5+ Guests</p>
                                    <p className="mt-3 text-gray-300">We offer PS5 & PS4 setups.</p>
                                </div>
                            </details>
                            
                            {/* Computers Dropdown */}
                            <details className="bg-black rounded-lg border border-gray-600">
                                <summary className="cursor-pointer p-4 text-white font-bold text-lg font-montserrat hover:bg-gray-700 rounded-lg">
                                    Computers
                                </summary>
                                <div className="p-4 border-t border-gray-600 text-white text-sm">
                                    <p>₹100 - 1 Hour</p>
                                    <p>₹250 - 3 Hours</p>
                                    <p>₹400 - 6 Hours</p>
                                    <p className="mt-3">Day Pass: ₹800</p>
                                    <p className="mt-3 text-gray-300 text-xs">*Note: Day Pass time does not stay on the users account past the end of the day. All other hourly options stay on the users account for future use.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
              
          </div>
          
            
        </>
    );
};
export default  ImageTextLayout;