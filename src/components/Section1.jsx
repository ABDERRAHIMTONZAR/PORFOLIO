import React from "react";
import Label from "./COMPOSNANTREUTILISABLE/LABEL";
import { FaDownload, FaUser, FaBriefcase, FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa";

export default function Section1() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center m-10 gap-16 py-20" id="about"> 
      
      <div className="w-full md:w-[40%] flex justify-center ">
        <div className="relative">
          <img 
            src="/AUBA.JPG" 
            alt="Photo de profil" 
            className="w-[300px] md:w-[300px] h-[300px] md:h-[400px] object-cover rounded-full shadow-xl border-4 border-red-500 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="w-full md:w-[60%] space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
           Bonjour, je suis <span className="text-red-500">Abderrahim Tonzar</span>
        </h1>
        
        <p className="sm:text-lg md:text-xl text-gray-600 leading-relaxed text-justify">
          Développeur FullStack passionné par la création d’applications web et mobiles modernes.  
          Curieux et motivé, j’aime relever de nouveaux défis techniques et utiliser les dernières
          technologies pour concevoir des solutions performantes, intuitives et adaptées aux besoins
          des utilisateurs.
        </p>

        <hr className="my-8 border-gray-300" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Label nom={<><FaUser className="inline text-red-500 mr-2"/>Nom</>} valeur="Tonzar Abderrahim" />
          <Label nom={<><FaBriefcase className="inline text-red-500 mr-2"/> Métier</>} valeur="Étudiant" />
          <Label nom={<><FaBirthdayCake className="inline text-red-500 mr-2"/> Âge</>} valeur="19 ans" />
          <Label nom={<><FaMapMarkerAlt className="inline text-red-500 mr-2"/> Ville</>} valeur="Casablanca" />
        </div>
      
        <div className="flex justify-start mt-8">
          <a 
            className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 
                       active:scale-95 transform transition duration-200 
                       text-white font-bold py-4 px-8 rounded-full 
                       flex items-center gap-3 justify-center cursor-pointer shadow-lg"
            href="/CV.pdf"
            download="CV_Abderrahim_Tonzar.pdf"
          >
            <FaDownload />
            Télécharger CV
          </a>
        </div>
      </div>
    </div>
  );
}
