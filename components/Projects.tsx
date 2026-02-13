"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Carely – Healthcare Appointment System",
    period: "2025 – Present (Individual Project)",
    tech: ["MERN", "FastAPI", "Machine Learning", "MongoDB"],
    description:
      "Semi-intelligent healthcare platform with ML-powered specialist recommendations and secure real-time appointment booking.",
    image: "/projects/carely.png",
    github: "#",
    live: "#",
  },
  {
    title: "Comprehensive Garage Management System",
    period: "2025 (Group Project – TayCanTech Pvt Ltd)",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    description:
      "Role-based garage system with secure authentication, service management and customer feedback modules.",
    image: "/projects/garage.png",
    github: "#",
    live: "#",
  },
  {
    title: "Project Aegis – Blockchain Esports Platform",
    period: "2025 (Hackelite – IEEE UoM)",
    tech: ["Next.js", "FastAPI", "Solidity", "Polygon"],
    description:
      "Decentralized esports tournament platform integrating blockchain for transparency and smart contracts.",
    image: "/projects/aegis.png",
    github: "#",
    live: "#",
  },
];

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

            {/* IMAGE */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="md:w-1/2 overflow-hidden rounded-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={700}
                height={450}
                className="object-cover w-full h-full transition duration-700 group-hover:scale-110"
              />
            </motion.div>

            {/* CONTENT */}
            <div className="md:w-1/2 flex flex-col justify-center">

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-semibold 
                text-gray-900 dark:text-white tracking-tight">
                {project.title}
              </h3>

              {/* Period */}
              <p className="text-sm mt-2 
                text-gray-500 dark:text-gray-400">
                {project.period}
              </p>

              {/* Tech Stack Badges */}
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

              {/* Description */}
              <p className="mt-5 
                text-gray-700 dark:text-gray-300 
                leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-xl
                    bg-gray-900 text-white
                    dark:bg-white dark:text-black
                    hover:scale-105 transition"
                >
                  <Github size={16} />
                  View Code
                </a>

                <a
                  href={project.live}
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-xl
                    border border-gray-300 dark:border-white/20
                    text-gray-900 dark:text-white
                    hover:bg-gray-100 dark:hover:bg-white/10
                    transition"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
