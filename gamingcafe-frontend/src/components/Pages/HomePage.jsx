import HomeTypo from "../utility/HomeTypo";
import { Button } from "flowbite-react"; 
import PortraitCarousel from "../utility/PortraitCarousel"; 
import video from "../../assets/4k_1.mov";
import ParticlesBackgroundTri from "../Animations/ParticlesBackgroundTri";

const HomePage = () => {
  return (
    // Remove h-screen. The main will now expand to fit its content.
    // Use min-h-screen if you want it to be AT LEAST a screen height, but
    // still allow it to grow. For a multi-component page, just 'w-full flex flex-col bg-black' is usually best.
    <main className="w-full flex flex-col bg-black">
       <div className="absolute inset-0 z-0 pointer-events-none">
          <ParticlesBackgroundTri />
        </div>
      {/* SECTION 1: Video Hero */}
      {/* Use a fixed viewport height (e.g., h-[70vh]) for hero sections. 
          This ensures it always takes up 70% of the screen height,
          and pushes content below it correctly. */}
      <section className="relative w-full h-[65vh]  overflow-hidden"> 
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          controls={false}
          className="w-full h-full object-cover" // Video covers the section
        />
        {/* Overlay for text, covers the video */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4">
          <div className="flex flex-col items-center gap-4 text-center max-w-4xl mx-auto">
            <h1 className="relative text-[40px] sm:text-5xl md:text-8xl lg:text-[120px] font-poppins font-extrabold text-transparent bg-clip-text stroke-text">
                 WILD <span className="stroke-text-1">GAMING  </span>
            </h1>
            {/* If you add a button, ensure it's here */}
            {/* <Button className="mt-8 bg-red-500 hover:bg-red-600 text-lg px-8 py-3 rounded-lg shadow-md">
                EXPLORE
            </Button> */}
          </div>
        </div>
      </section>

      {/* SECTION 2: Typography */}
      {/* h-fit is good, as it grows with content. Add vertical padding for spacing. */}
      <section className="bg-black text-white"> 
        <div className="mx-auto px-4">
          <HomeTypo />
        </div>
      </section>

      {/* SECTION 3: Portrait Carousel */}
      {/* Use a more flexible height or fixed height. 
          Using py- for spacing, and potentially a min-h for small content. */}
      <section className="bg-black"> 
         <PortraitCarousel />
      </section>

      

    </main>
  );
};

export default HomePage;