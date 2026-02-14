"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

/* ------------------ PROJECT DATA ------------------ */

const projects = [
  {
    title: "Carely – Healthcare Appointment System",
    period: "2025 – Present (Individual Project)",
    tech: ["MERN", "FastAPI", "Machine Learning", "MongoDB"],
    description:
      "Semi-intelligent healthcare platform with ML-powered specialist recommendations and secure real-time appointment booking.",
    images: [
      "/projects/carely-1.png",
      "/projects/carely-2.png",
      "/projects/carely-3.png",
    ],
    github: "#",
    live: "",
  },
  {
    title: "Comprehensive Garage Management System",
    period: "2025 (Group Project – TayCanTech Pvt Ltd)",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    description:
      "Developed a full-stack garage management system with role-based access for customers, technicians, and managers. Implemented secure JWT authentication and built modular service and feedback management features. Collaborated in an agile team environment to deliver a scalable and user-focused solution for real-world operational workflows.",
    images: [
      "/projectImages/garage1.jpg",
      "/projectImages/garage2.jpg",
      "/projectImages/garage3.jpg",
      "/projectImages/garage4.jpg",
    ],
    github: "https://github.com/Bytebuilder2-0",
    live: "",
  },
  {
    title: "StockCast – Distributed Real-Time Broadcasting System",
    period: "Network Programming/ Fullstack Development ",
    tech: ["Java", "Spring Boot", "Java NIO", "TCP", "UDP", "WebSocket"],
    description:
      "Engineered a high-performance, non-blocking distributed broadcasting system using Spring Boot and Java NIO. Designed a publish-subscribe architecture supporting TCP, UDP, and WebSocket protocols to enable efficient real-time data distribution. Optimized for low latency and concurrent client handling across multiple communication channels.",
    images: [
      "/projectImages/stockcast.jpg",
      "/projectImages/stockcast2.jpg",
    ],
    github: "",
  
  },
  {
    title: "Project Aegis – Blockchain Esports Platform",
    period: "2025 (Hackelite – IEEE UoM)",
    tech: ["Next.js", "FastAPI", "Solidity", "Polygon"],
    description:
      "Contributed to the development of a decentralized esports tournament platform integrating blockchain for transparency and smart contract-based prize distribution. Built frontend interfaces with Next.js and backend APIs using FastAPI, while leveraging Solidity and Polygon for secure on-chain logic.",
    images: [
      "/projectImages/aegis1.png",
      "/projectImages/aegis2.png",
    ],
    github: "https://github.com/IDMendis/Aegis",
    live: "",
  },
  {
    title: "Weather App with Real-Time Data and Forecasting",
    period: "2025 (Personal Project)",
    tech: ["Flutter", "Dart", "OpenWeatherMap API"],
    description:
      "Built a cross-platform mobile application using Flutter that fetches and displays real-time weather data via the OpenWeatherMap API. Focused on clean UI design, responsive layouts, and efficient API integration to deliver accurate and user-friendly weather insights.",
    images: [
      "/projectImages/weatherApp.jpg",
      "/projectImages/weatherApp2.jpg",
    ],
    github: "https://github.com/IDMendis/Flutter-Weather-Forecast-UI",
    live: "",
  },
  {
  title: "Tic-Tac-Toe Gamebox",
  period: "2024 | Microcontroller-Based Hardware Project",
  tech: ["Arduino", "C++", "ESP32", "RFID", "LED Neon Lights", "Firebase"],
  description:
    "Designed and developed an interactive microcontroller-based game system inspired by the classic SOS gameplay concept. Implemented embedded logic and hardware integration to create a responsive and engaging physical gaming experience.",
  images: ["/projectImages/tictac.jpg", "/projectImages/tictac2.jpg"],
  github: "",
  live: "https://www.youtube.com/watch?v=HzNSNgRtWnQ",
},

];

/* ------------------ IMAGE SLIDER ------------------ */

function ProjectSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, images.length]);

  return (
    <div
      className="relative w-full h-[350px] overflow-hidden rounded-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Project image"
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index
                ? "w-5 bg-white"
                : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------ MAIN COMPONENT ------------------ */

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 max-w-6xl mx-auto"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight 
          bg-gradient-to-r from-purple-500 to-blue-500 
          bg-clip-text text-transparent">
          My Projects
        </h2>
      </motion.div>

      <div className="space-y-28">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`group relative flex flex-col md:flex-row gap-12 p-8 
              rounded-3xl backdrop-blur-xl
              bg-white/60 dark:bg-white/5
              border border-gray-200 dark:border-white/10
              shadow-lg hover:shadow-2xl
              transition-all duration-500
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
            `}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl 
              bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0
              opacity-0 group-hover:opacity-100 
              blur-2xl transition duration-700 -z-10"
            />

            {/* IMAGE SLIDER */}
            <div className="md:w-1/2">
              <ProjectSlider images={project.images} />
            </div>

            {/* CONTENT */}
            <div className="md:w-1/2 flex flex-col justify-center">

              <h3 className="text-2xl md:text-3xl font-semibold 
                text-gray-900 dark:text-white tracking-tight">
                {project.title}
              </h3>

              <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
                {project.period}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-full
                      bg-purple-100 text-purple-700
                      dark:bg-purple-500/20 dark:text-purple-300
                      border border-purple-200 dark:border-purple-500/30"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
<div className="flex gap-4 mt-6">

  {/* Show GitHub ONLY if github exists */}
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 text-sm rounded-xl
        bg-gray-900 text-white
        dark:bg-white dark:text-black
        hover:scale-105 transition"
    >
      <Github size={16} />
      View Code
    </a>
  )}

  {/* Show Live Demo ONLY if live exists */}
  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 text-sm rounded-xl
        border border-gray-300 dark:border-white/20
        text-gray-900 dark:text-white
        hover:bg-gray-100 dark:hover:bg-white/10
        transition"
    >
      <ExternalLink size={16} />
      Live Demo
    </a>
  )}

</div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
