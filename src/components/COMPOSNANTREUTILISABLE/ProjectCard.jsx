import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ image, title, author, company, tech, detailsLink, demoLink, completed, description,liveDemo }) {
  return (
    <div className=" rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        {completed ? (
          <span className="absolute top-3 right-3 bg-cyan-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            COMPLET
          </span>
        ):(
            <span className="absolute top-3 right-3 bg-cyan-400 text-black text-xs font-bold px-3 py-1 rounded-full">
            EN COURS
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-400">
          par {author} pour <span className="text-red-400">{company}</span>
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t, index) => (
            <span key={index} className="bg-neutral-800 text-gray-300 px-3 py-1 rounded-full text-xs">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          <a href={detailsLink} target="_blank" rel="noopener noreferrer"
             className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md text-sm font-semibold flex items-center gap-2">
            <FaGithub /> View Details
          </a>
          {liveDemo &&(
          <a href={demoLink} target="_blank" rel="noopener noreferrer"
             className="px-4 py-2 border border-gray-400 hover:bg-gray-800 rounded-md text-sm font-semibold flex items-center gap-2">
            <FaExternalLinkAlt /> Live Demo
          </a>)}
          <br />
        </div><br />
         <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
