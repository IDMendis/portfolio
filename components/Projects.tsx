"use client";

import Image from "next/image";
import { motion } from "framer-motion";

<motion.div
  whileHover={{ y: -8 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="rounded-2xl overflow-hidden border bg-white/40 dark:bg-black/40 backdrop-blur-lg"
></motion.div>

const projects = [
  {
    title: "Carely – Healthcare Appointment System",
    tech: "MERN, FastAPI, Machine Learning, MongoDB",
    description:
      "A semi-intelligent healthcare platform that recommends medical specialists based on patient symptoms using ML.",
    image: "/projects/carely.png",
  },
  {
    title: "Garage Management System",
    tech: "React, Node.js, Express, MongoDB, JWT",
    description:
      "Role-based garage system with secure authentication, service management, and customer feedback.",
    image: "/projects/garage.png",
  },
  {
    title: "Project Aegis – Blockchain Esports Platform",
    tech: "Next.js, FastAPI, Solidity, Polygon",
    description:
      "Decentralized esports tournament platform built for IEEE Hackelite.",
    image: "/projects/aegis.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl overflow-hidden border bg-white/40 dark:bg-black/40 backdrop-blur-lg"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-blue-500 mt-1">{project.tech}</p>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
