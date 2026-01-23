import React from 'react'
import ProjectCard from './COMPOSNANTREUTILISABLE/ProjectCard';

export default function Section3() {
  const projects = [
    {
      image: "/kendy.png",
      title: "Kendy - siteWeb",
      author: "Abderrahim Tonzar",
      company: "Projet Personnel",
      tech: ["HTML", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      detailsLink: "https://github.com/abderrahimtonzar/abderrahimtonzar.github.io",
      demoLink: "https://abderrahimtonzar.github.io/",
      completed: true,
      description: "Site web moderne et responsive pour mon établissement scolaire. Ce projet avait pour objectif de mettre en avant l’école, ses formations et ses services, à travers une interface simple et intuitive.",
      liveDemo: true
    },
    {
      image: "/eduspace.png",
      title: "EduSpace - Application Mobile",
      author: "Abderrahim Tonzar/ILYAS BAHMED/SAMIM ABDELMALIK",
      company: "Projet de Fin d'Études - BTS",
      tech: ["React Native", "Node.js", "Express", "MongoDB"],
      detailsLink: "https://github.com/ABDERRAHIMTONZAR/Projet-Educative-frontend/",
      demoLink: "#",
      completed: false,
      description: "Application mobile de diffusion de vidéos éducatives avec chat, forum, commentaires et streaming en temps réel.",
      liveDemo: false
    },
    {
      image: "/web.png",
      title: "EduSpace - Application Web ",
      author: "Abderrahim Tonzar/ILYAS BAHMED/SAMIM ABDELMALIK",
      company: "Projet de Fin d'Études - BTS",
      tech: ["React", "CSS", "Node.js", "Express.js", "MongoDB"],
      detailsLink: "https://github.com/AbderrahimTonzar",
      demoLink: "#",
      completed: false,
      description: "Interface web d’administration pour gérer les vidéos, modérer les contenus, suivre les signalements et gérer les utilisateurs."
    ,
      liveDemo: false
    },
    
{
  image: "/examen.png",
  title: "EVALYA SMART - Application Web (Admin)",
  author: "Abderrahim Tonzar",
  company: "IAAI Academy",
  tech: ["React", "Tailwind", "Node.js", "Express.js", "PostgreSQL", "Docker", "CI/CD"],
  detailsLink: "https://github.com/AbderrahimTonzar",
  demoLink: "https://evalyaasmart.netlify.app/#",
  completed: true,
  description: "EVALYA SMART est une application web éducative qui facilite la gestion des devoirs. Les enseignants peuvent publier et recevoir les devoirs en ligne, les étudiants disposent d’un espace dédié pour consulter et soumettre leurs travaux, et le directeur bénéficie d’un tableau de bord statistique pour suivre l’activité et les performances.",
  liveDemo: true
}
,
    {
      image: "/imagee.png",
      title: "Plateforme de Feedback Client",
      author: "Abderrahim Tonzar",
      company: "MOROSOFT SOLUTIONS",
      tech: ["React", "Tailwind", "Vercel"],
      detailsLink: "https://github.com/ABDERRAHIMTONZAR/Projet-feedback-client-/",
      demoLink: "#",
      completed: true,
      description: "Plateforme moderne permettant aux entreprises de collecter et analyser les retours clients.",
      liveDemo: false
    },
{
  image: "/sondage.png",
  title: "Plateforme web de sondages en temps réel",
  author: "Abderrahim Tonzar, Ali Belaouali",
  company: "École Supérieure de Technologie",
  tech: ["React", "Tailwind CSS", "Node.js", "Express", "MySQL", "Socket.IO"],
  description: "Plateforme web moderne permettant de créer, partager et analyser des sondages en temps réel avec authentification sécurisée et statistiques dynamiques.",
  detailsLink: "https://github.com/ABDERRAHIMTONZAR/Systeme_Vote/",
  demoLink: "https://systeme-vote-frontend-61f9.vercel.app/",
  liveDemo: true,
  completed: true
},
      {
      image: "/athan.jpg",
      title: "Athan - AthanPro ",
      author: "Abderrahim Tonzar",
      company: "Projet Personel",
      tech: ["ReactNative", "tailwind", "Node.js", "Express.js", "MongoDB"],
      // detailsLink: "https://github.com/AbderrahimTonzar",
      demoLink: "#",
      completed: false,
      description: "Athan est une application mobile conçue pour aider les musulmans à rester connectés avec leurs pratiques religieuses quotidiennes. Elle fournit des alertes pour les heures de prière, des rappels du Coran, et d’autres fonctionnalités utiles pour la vie spirituelle..",
      liveDemo: false
    },
  ];

  return (
    <div className='flex flex-col py-20' id="projects">
      <h1 className="flex flex-row items-center justify-center gap-3 text-3xl md:text-4xl font-bold text-center mb-12 text-red-500">
        🖲️ PROJETS
      </h1>
      <h2 className="text-center mb-10 text-2xl md:text-3xl font-bold">
        <span className="text-gray-500">Nombre de projets :</span>{" "}
        <span className="text-red-500 px-4 py-2 ">
          {projects.length}
        </span>
      </h2>    
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-20'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
