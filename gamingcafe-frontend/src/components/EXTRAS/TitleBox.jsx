import heroImg from '../../assets/lounge11.jpg'
import { Link } from 'react-router-dom';
const TitleBox = ({ title }) => {
      return (
  <section className="w-[60%] mx-auto">
        

        <div className="flex flex-col md:grid md:grid-cols-5 md:grid-rows-6 gap-4 px-2 md:px-6 py-6 md:py-8 w-full">

          {/* IMAGE - Show first on mobile */}
          <div className=" md:col-start-3 md:col-span-3 md:row-start-2 md:row-span-6 relative z-20">
            <img
              src={heroImg}
              alt="Setup"
              className=" object-cover rounded-lg shadow-xl transition-all duration-300 lg:translate-x-2 xl:translate-x-4"
            />
          </div>

          {/* TITLE BOX */}
          {/* Blue Background Box - Row 2 (mirrored) */}
<div className="relative md:col-start-1 md:col-span-4 md:row-start-2 row-span-2 flex justify-center">
  <div className="bg-blue-700 bg-opacity-25 w-full max-w-[90%] h-[140px] rounded-md border-8 border-white" />
</div>

{/* Black Foreground Box - Row 3 (mirrored + shifted up to overlap) */}
<div className="relative md:col-start-1 md:col-span-4 md:row-start-3 flex justify-center z-10 -translate-y-[140px]">
  <div className="bg-black text-white w-full max-w-[80%] h-[160px] flex md:justify-start items-center justify-center rounded-md p-4 sm:p-6">
    <h2 className="text-xl sm:text-2xl md:text-5xl font-extrabold font-poppins uppercase">
      THE GAMES
    </h2>
  </div>
</div>

          {/* TEXT BOX + BUTTON - Show last on mobile */}
          <div className="z-10 mt-6 md:mt-0 md:col-start-1 md:col-span-2 md:row-start-4 md:row-span-1 flex flex-col items-center justify-start">
  <p className="bg-black/20 text-white font-montserrat font-semibold text-base md:text-xl leading-relaxed p-6 rounded-md break-words max-w-full">
    We are constantly updating our library with new games for you to enjoy. Check out our current library below!
  </p>
  <Link to="/gamelibrary" className="mt-2">
    <button
      className="relative inline-flex items-center border-2 justify-center px-5 py-2.5 min-w-[200px] text-white text-base md:text-xl font-extrabold uppercase font-lato bg-[#0078D7] hover:bg-white hover:text-[#0078D7] transition-colors duration-300 text-center rounded-none"
    >
      Game Library
    </button>
  </Link>
</div>
        </div>
    </section>

    );
  };
export default TitleBox;




