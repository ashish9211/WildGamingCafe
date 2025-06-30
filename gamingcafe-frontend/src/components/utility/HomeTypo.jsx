
const HomeTypo = () => {
     return (
//     <section className="bg-black dark:bg-gray-900">
//       <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
        
//         <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-[83px] dark:text-white">GAMING CAFE</h1>
//         <p class="mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
//         {/* <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
//                     Learn more
//             <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//             </svg>
//         </a>         */}
//          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
//             <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
// Cyan to blue
//             </span>
//         </button>

//       </div>
//     </section>

<section className="bg-black dark:bg-gray-900 w-full flex items-center">
  <div className="max-w-screen-xl mx-auto px-4 py-8 flex flex-col md:flex-row flex-wrap items-center justify-center gap-8">

    {/* Text in center */}
    <div className="text-center px-4 sm:px-6 flex-1 min-w-[280px]">
        <h1 className="mb-4 text-2xl sm:text-4xl md:text-5xl lg:text-[83px] font-poppins font-semibold leading-tight tracking-tight text-white break-words animated-underline">
            Gaming Lounge
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-montserrat font-semibold text-white leading-relaxed max-w-2xl mx-auto break-normal">
            Experience the ultimate gaming zone – where high-performance PCs and top-tier consoles meet comfort and style.
            Whether you're dropping in for casual play or grinding ranked, our café is built for every type of gamer.
            Level up your sessions in a space made just for you.
        </p>
    </div>

    {/* Buttons to the right of text */}
    <div className="flex flex-col gap-4 md:ml-8 flex-shrink-0 min-w-[150px]">
      {['RATES', 'GAMES', 'EVENTS'].map(label => (
        <button
          key={label}
          className="relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-white rounded-none group bg-gradient-to-br from-cyan-500 to-blue-500 hover:text-white focus:ring-4 focus:ring-cyan-200"
        >
          <span className="relative px-5 py-2.5 font-extrabold font-lato bg-black  group-hover:bg-transparent min-w-[150px] text-center">
            {label}
          </span>
        </button>
      ))}
    </div>

  </div>
</section>
     );
};

export default HomeTypo;