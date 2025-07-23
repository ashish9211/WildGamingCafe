import ThreeExample1 from "../Animations/ThreeExample1";
import ThreeExample11 from "../Animations/ThreeExample11";
import "../Animations/ThreeExample1.css";
export default function GameLibInfo2() {
    return (
   <section className="relative h-[75vh] w-full overflow-hidden flex items-center justify-center">
  {/* Background animation layers */}
  {/* <div className="sliding-bg1"></div>
  <div className="sliding-bg1 bg2"></div>
  <div className="sliding-bg1 bg3"></div> */}

  
      {/* The 3D Background Component */}
        <ThreeExample1 /> {/* This will render your 3D background */}
        

      
        <div  className="relative z-10 flex flex-col text-white text-start justify-items-start max-w-3xl px-6">
          {/* <div className="relative z-10 text-white text-center max-w-3xl px-6"> */}
            <h1 className="text-[56px] sm:text-[96px] font-bold font-poppins text-white  text-center mb-4">
            GAME LIBRARY
            </h1>
            {/* <p className="text-base sm:text-lg md:text-xl font-montserrat font-semibold">
            You thought there will be valid info here? Think again... You came here to play games,
            why the f*ck are you still reading this? Scroll down and play your game, you NOOB.
            </p> */}
        </div>
      {/* </div> */}
     
</section>
    )
}