import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-black text-gray-300 pt-14 pb-8 mt-20 relative">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        
        <div className="flex flex-col gap-2 text-center md:text-left items-center md:items-start">
          <img src="/logo.png" alt="Logo du site" className="w-20 md:w-28" />
          <p className="text-gray-400 text-sm">
            Développeur passionné 🚀 créant des solutions modernes et performantes.
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-6 font-medium">
          <li>
            <Link to="home" smooth duration={600} className="hover:text-red-400 text-lg cursor-pointer transition">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="about" smooth duration={600} className="hover:text-red-400 text-lg cursor-pointer transition">
              À propos
            </Link>
          </li>
          <li>
            <Link to="skills" smooth duration={600} className="hover:text-red-400 text-lg cursor-pointer transition">
              Compétences
            </Link>
          </li>
          <li>
            <Link to="projects" smooth duration={600} className="hover:text-red-400 text-lg cursor-pointer transition">
              Projets
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={600} className="hover:text-red-400 text-lg cursor-pointer transition">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex justify-center gap-5 text-2xl">
          <a href="https://web.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
             className="p-3 rounded-full bg-neutral-800 hover:bg-blue-600 text-white transition transform hover:scale-110 shadow-md">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/abderrahim-tonzar-11825230b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
             className="p-3 rounded-full bg-neutral-800 hover:bg-blue-600 text-white transition transform hover:scale-110 shadow-md">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
             className="p-3 rounded-full bg-neutral-800 hover:bg-gray-700 text-white transition transform hover:scale-110 shadow-md">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
             className="p-3 rounded-full bg-neutral-800 hover:bg-pink-500 text-white transition transform hover:scale-110 shadow-md">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MonPortfolio. Tous droits réservés.
      </div>
    </footer>
  );
}
