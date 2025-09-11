import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaJava, 
  FaDatabase, FaCode, FaProjectDiagram, FaDocker 
} from "react-icons/fa";
import { SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500 w-14 h-14" />, name: "HTML5", type: "FRONTEND" },
    { icon: <FaCss3Alt className="text-blue-500 w-14 h-14" />, name: "CSS3", type: "FRONTEND" },
    { icon: <FaJs className="text-yellow-400 w-14 h-14" />, name: "JavaScript", type: "FRONTEND" },
    { icon: <FaReact className="text-cyan-400 w-14 h-14" />, name: "React / React Native", type: "FRONTEND" },
    { icon: <FaNodeJs className="text-green-500 w-14 h-14" />, name: "Node.js / Express", type: "BACKEND" },
    { icon: <FaPhp className="text-indigo-500 w-14 h-14" />, name: "PHP", type: "BACKEND" },
    { icon: <FaJava className="text-red-600 w-14 h-14" />, name: "Java", type: "BACKEND" },
    { icon: <SiMysql className="text-blue-600 w-14 h-14" />, name: "MySQL", type: "DATABASE" },
    { icon: <SiMongodb className="text-green-700 w-14 h-14" />, name: "MongoDB", type: "DATABASE" },
    { icon: <SiPostgresql className="text-sky-700 w-14 h-14" />, name: "PostgreSQL", type: "DATABASE" },
    { icon: <FaDatabase className="text-gray-600 w-14 h-14" />, name: "SQL Server", type: "DATABASE" },
    { icon: <FaDocker className="text-blue-400 w-14 h-14" />, name: "Docker", type: "DEVOPS" },
    { icon: <FaCode className="text-purple-600 w-14 h-14" />, name: "VB.NET", type: "BACKEND" },
    { icon: <FaProjectDiagram className="text-pink-500 w-14 h-14" />, name: "Méthode Merise", type: "METHODOLOGY" },
    { icon: <FaProjectDiagram className="text-orange-500 w-14 h-14" />, name: "Méthode UML", type: "METHODOLOGY" },
  ];

  const typeColors = {
    FRONTEND: "from-blue-500 to-cyan-500",
    BACKEND: "from-green-500 to-emerald-600",
    DATABASE: "from-yellow-500 to-orange-500",
    DEVOPS: "from-purple-500 to-pink-600",
    METHODOLOGY: "from-pink-500 to-red-500",
  };

  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-neutral-900 text-white">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16">
        <span className="text-red-500">
          💡 Mes Compétences
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative group p-6 rounded-xl bg-neutral-800/60 backdrop-blur-sm border border-neutral-700 
                       hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-red-500/40"
          >
            <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-2xl bg-gradient-to-r ${typeColors[skill.type]} transition duration-500`}></div>
            
            <div className="relative flex flex-col items-center space-y-4 z-10">
              <div className="p-5 rounded-full bg-neutral-900 shadow-md group-hover:rotate-6 transition-transform duration-500">
                {skill.icon}
              </div>

              <p className="font-semibold text-lg tracking-wide">{skill.name}</p>

              <span className={`text-xs font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r ${typeColors[skill.type]} shadow-md`}>
                {skill.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
