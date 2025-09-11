import React from 'react';
import { FaCode, FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";

export default function App() {
  return (
    <div className="scroll-smooth w-full overflow-x-hidden"> 

      <div 
        id="home"
         className="flex flex-col md:flex-row items-center justify-between 
             bg-neutral-900 text-white 
             pt-[100px] px-6 md:px-12 pb-10
             max-h-[1000px] 
             w-full max-w-screen overflow-hidden"
>

        <div
          className="flex flex-col gap-3 
                     h-80 md:h-[500px] 
                     bg-contain bg-center bg-no-repeat 
                     justify-center text-left p-6 rounded-lg 
                     max-w-full"
          style={{ backgroundImage: "url('/r.png')" }}
        >
          <h1 className="text-2xl text-gray-400">Bonjour, je suis</h1> 
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide animate-fadeIn">
            ABDERRAHIM TONZAR
          </h1>
          <h2 className="text-2xl md:text-3xl text-red-500 font-bold flex flex-row items-center gap-3">
            <FaCode className="text-red-500" />
            Développeur FullStack
          </h2>
          
   <div className="mt-6 flex">
  <Link
    className="flex items-center gap-2 w-auto whitespace-nowrap 
               px-6 py-2 bg-red-500 hover:bg-red-600 
               text-white font-semibold rounded-lg shadow-md transition cursor-pointer"
    to="about"
    smooth={true}
  >
    En Savoir plus <FaArrowDown className="animate-bounce" />
  </Link>
</div>
        </div>

        {/* Colonne droite (image profil) */}
        <div className="flex justify-center mt-6 md:mt-0 max-w-full">
          <img
            src="/image.png"
            alt="photo"
            className=" w-[550px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
