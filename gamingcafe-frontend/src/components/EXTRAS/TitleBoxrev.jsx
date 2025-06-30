import heroImg from '../../assets/lounge11.jpg'
const TitleBoxrev = () => {
  return (
    <section className="w-[80%] mx-auto">
        <div className="hidden md:grid grid-cols-5 grid-rows-6 gap-4 px-8 py-12 relative w-full h-[100px] mt-24"></div>
        <div className="flex flex-col md:grid md:grid-cols-5 md:grid-rows-6 gap-4 px-4 md:px-8 py-8 md:py-12 w-full">

      {/* IMAGE */}
      <div className="md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-5 relative z-20">
        <img
          src={heroImg}
          alt="Setup"
          className="
            w-full h-full object-cover rounded-lg shadow-xl
               transition-all duration-300
               lg:translate-x-2 xl:translate-x-4"
        />
      </div>

      {/* TITLE BOX */}
       {/* Blue Background Box - Row 2 */}
<div className="relative md:col-start-2 md:col-span-4 md:row-start-2 row-span-2 flex justify-center">
  <div className="bg-blue-700 bg-opacity-25 w-full max-w-[90%] h-[140px] rounded-md border-8 border-white" />
</div>

{/* Black Foreground Box - Row 3 (shifted up to overlap) */}
<div className="relative md:col-start-2 md:col-span-4 md:row-start-3 flex justify-center z-10 -translate-y-[96px]">
  <div className="bg-black text-white w-full max-w-[80%] h-[160px] flex md:justify-end items-center justify-center rounded-md p-4 sm:p-6">
    <h2 className="text-xl sm:text-2xl md:text-5xl font-extrabold font-poppins uppercase">
      THE SETUP
    </h2>
  </div>
</div>

      {/* TEXT BOX */}
      <div className="z-10 mt-6 md:mt-0 md:col-start-3 md:col-span-3 md:row-start-4 md:row-span-2 flex items-center justify-center">
        <p className="bg-black/20 text-white font-montserrat font-semibold text-base md:text-xl leading-relaxed p-6 rounded-md break-words max-w-full">
          Step into the ultimate gaming universe. Our cafe is equipped with cutting-edge PC setups and a diverse array of console stations, featuring the 
          latest Xbox and PlayStation 5 systems, alongside other popular consoles. Get ready for unparalleled immersion and unforgettable gaming moments.
        </p>
      </div>
    </div>
    </section>
  );
};

export default TitleBoxrev;