// import img from "../assets/img2.jpg";
// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/1.png";
// import {ChevronLeft, ChevronRight} from "lucide-react";

// import React, {useState} from 'react';

// const images =[img, img1, img2];

// const Home = () =>{
    
//     const[current , setCurrent] = useState(0);

//     const prevSlide = () => {
//         setCurrent((prev) => ((prev-1)+images.length)%images.length);
//     };

//     const nextSlide = () =>{
//         setCurrent((prev) => ((prev+1)%images.length));
//     }

//     return (
//         <div className='relative w-screen h-screen overflow-auto'>
//            <img className="w-full h-full object-cover absolute inset-0" src={images[current]} alt ="WELCOME TO GAMING CAFE" />
           
//            <div className = " absolute top-[35%] bottom-[40%] justify-center inset-0 w-full bg-gray-700/45 flex items-center ">
//               <h1 className="text-emerald-200 
//                text-3xl sm:text-4xl 
//                md:text-5xl lg:text-6xl 
//                font-bold text-center px-4 "> WILD GAMING CAFE</h1>
//            </div>

//            {/* Navigation Buttons */}
//         <button
//             onClick={prevSlide}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600 text-cyan-50 text-3xl hover:bg-black/60 px-3 py-1 rounded-full"
//         >
//             <ChevronLeft size={15} strokeWidth={5} className="text-black"/>
//         </button>
//         <button
//             onClick={nextSlide}
//             className="absolute right-4 top-1/2  -translate-y-1/2 text-3xl bg-black/40 hover:bg-black/60 px-3 py-1 rounded-full"
//         >
//             <ChevronRight size={15} strokeWidth={5} />
//         </button>
//         </div>
//     );
// };
  

// export default Home;