import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: 1, label: "Accueil", to: "home" },
    { id: 2, label: "À propos", to: "about" },
    { id: 3, label: "Compétences", to: "skills" },
    { id: 4, label: "Projets", to: "projects" },
    { id: 5, label: "Contact", to: "contactt" },
  ];

  return (
    <nav className=" fixed top-0 left-0 w-full bg-neutral-900 text-white shadow-md z-50 h-[80px]  ">
      <div className="flex justify-between items-center px-6 md:px-20 ">
        
        <div className="flex items-center gap-3 ml-3">
          <img src="/logo.png" alt="Logo" className="w-[20%]" />
        </div>

        <div className="hidden md:flex gap-8 font-medium">
          {links.map(({ id, label, to }) => (
            <Link
              key={id}
              to={to}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass=" text-red-400 cursor-pointer font-bold"
              className="cursor-pointer transition-colors text-xl hover:text-red-400 font-bold"
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-center bg-neutral-900 text-lg py-6 gap-6 shadow-md animate-fadeIn">
          {links.map(({ id, label, to }) => (
            <Link
              key={id}
              to={to}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="text-red-400 font-bold"
              onClick={() => setOpen(false)}
              className="cursor-pointer transition-colors hover:text-red-400"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
