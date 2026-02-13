"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Carely – Healthcare Appointment System",
    period: "2025 – Present (Individual Project)",
    tech: "MERN Stack, Python, FastAPI, Machine Learning, MongoDB",
    description:
      "Semi-intelligent healthcare platform with ML-powered specialist recommendations and secure real-time appointment booking.",
    image: "/projects/carely.png",
  },
  {
    title: "Comprehensive Garage Management System",
    period: "2025 (Group Project – TayCanTech Pvt Ltd)",
    tech: "React.js, Node.js, Express.js, MongoDB, JWT",
    description:
      "Role-based garage system with secure authentication, service management and customer feedback modules.",
    image: "/projects/garage.png",
  },
  {
    title: "Project Aegis – Blockchain Esports Platform",
    period: "2025 (Hackelite – IEEE UoM)",
    tech: "Next.js, FastAPI, Solidity, Polygon",
    description:
      "Decentralized esports tournament platform integrating blockchain for transparency and smart contracts.",
    image: "/projects/aegis.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 max-w-6xl mx-auto">
      
      {/* Apple-style Section Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-20 tracking-tight">
          My Projects
        </h2>
      </motion.div>

      <div className="space-y-28">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1], // Apple-like easing
            }}
            viewport={{ once: true }}
            className={`group relative flex flex-col md:flex-row gap-12 p-8 
              rounded-3xl backdrop-blur-xl
              bg-white/40 dark:bg-black/40
              border border-white/10
              transition-all duration-500
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
            `}
          >
            
            {/* ✨ Glowing Border Layer */}
            <div className="absolute inset-0 rounded-3xl 
              bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0
              opacity-0 group-hover:opacity-100 
              blur-xl transition duration-700 -z-10">
            </div>

            {/* LEFT - IMAGE */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
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

            {/* RIGHT - CONTENT */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>

              <p className="text-sm text-blue-500 mt-2">
                {project.period}
              </p>

              <p className="text-sm text-purple-500 mt-2">
                {project.tech}
              </p>

              <p className="mt-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
