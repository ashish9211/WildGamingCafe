import ParticlesBackgroundTri from "../Animations/ParticlesBackgroundTri";

export default function GameLibInfo() {
    return (
   <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
  {/* Background animation layers */}
  <div className="sliding-bg1"></div>
  <div className="sliding-bg1 bg2"></div>
  <div className="sliding-bg1 bg3"></div>

  {/* Content */}
  <div className="relative z-10 text-white text-center max-w-3xl px-6">
    <h1 className="text-[72px] sm:text-[96px] font-bold font-poppins text-gray-50 mb-4">
      GAME LIBRARY
    </h1>
    <p className="text-base sm:text-lg md:text-xl font-montserrat font-semibold">
      You thought there will be valid info here? Think again... You came here to play games,
      why the f*ck are you still reading this? Scroll down and play your game, you NOOB.
    </p>
  </div>
</section>
    )
}