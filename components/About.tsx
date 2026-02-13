"use client";
import { useEffect, useState } from "react";
import {
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Award,
  Code,
  Server,
  Database,
  Cpu,
  Globe,
  Layers
} from "lucide-react";

import Animate from "./Animate";

export default function About() {
  const [index, setIndex] = useState(0);

  /* ---------------- TECH STACKS ---------------- */
 const techStacks = [
  { name: "React", icon: Code, color: "from-cyan-500 to-blue-600" },
  { name: "Next.js", icon: Globe, color: "from-gray-700 to-black" },
  { name: "Tailwind", icon: Layers, color: "from-cyan-400 to-blue-500" },
  { name: "Node.js", icon: Server, color: "from-green-500 to-emerald-600" },
  { name: "Python", icon: Cpu, color: "from-yellow-400 to-green-500" },
  { name: "Java", icon: Cpu, color: "from-red-500 to-orange-600" },
  { name: "Express.js", icon: Server, color: "from-gray-600 to-gray-800" },
  { name: "Firebase", icon: Database, color: "from-yellow-500 to-orange-500" },
];

const infiniteStacks = [...techStacks, ...techStacks];

 
  /* ---------------- CERTIFICATIONS ---------------- */
const certifications = [
  {
    title: "Authentication and Authorization in Web & API Security",
    org: "Linux Foundation",
    year: "2025",
    link: "",
    image: "/certificates/linux-auth.png"
  },
  {
    title: "Introduction to Cybersecurity",
    org: "Cisco Networking Academy",
    year: "2025",
    link: "",
    image: "/images/cs1.jpg"
  },
  {
    title: "Blockchain: Understanding Its Uses and Implications",
    org: "Linux Foundation",
    year: "2025",
    link: ""
  },
  {
    title: "Complete Guide to Cybersecurity: A Practical Approach",
    org: "LinkedIn Learning",
    year: "2025",
    link: ""
  },
  {
    title: "Programming Foundations: Software Testing / QA",
    org: "LinkedIn Learning",
    year: "2025",
    link: "https://www.linkedin.com/learning/certificates/0032352972e4be1a12f75d4ce1a013a5208586bd628a69d0bd6f11005ca7253d"
  }
];



  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      {/* ---------------- HEADER ---------------- */}
      <Animate>
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">About Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mb-8" />
        
      </Animate>

      {/* ---------------- INTRO + IMAGE ---------------- */}
      <Animate delay={0.1}>
        <div className="grid md:grid-cols-3 gap-10 mb-16 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-56 h-56 rounded-2xl overflow-hidden border bg-white/40 dark:bg-black/40 backdrop-blur-lg">
              <img
                src="/images/me1.jpeg"
                alt="Dinushi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-2">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Software Engineering undergraduate pursuing a BSc (Hons) in
              Information Technology at the University of Moratuwa. Experienced
              in full-stack web and mobile development with a strong focus on
              secure backend systems, authentication, and clean UI/UX design.
              Passionate about building real-world solutions and continuously
              improving my technical skill set.
            </p>
          </div>
        </div>
      </Animate>

      {/* ---------------- EDUCATION ---------------- */}
      <Animate delay={0.2}>
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-white/50 dark:bg-black/40 backdrop-blur-lg border">
            <h3 className="font-semibold mb-2 flex items-center gap-2 dark:text-white">
              🎓 Higher Education
            </h3>
              <h4 className="font-semibold mb-2 flex items-center gap-2 dark:text-white">
                University of Moratuwa
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              BSc (Hons) in Information Technology<br />
              GPA: 3.49 (2023 – 2027)
            </p>
          </div> 

          <div className="p-6 rounded-xl bg-white/50 dark:bg-black/40 backdrop-blur-lg border">
            <h3 className="font-semibold mb-2 dark:text-white">🧪 Secondary Education</h3>
            <h4 className="font-semibold mb-2 flex items-center gap-2 dark:text-white">
                  Govt/ Science Cillege- Matale
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Biological Science<br />
              Biology (B), Physics (B), Chemistry (A)
            </p>
          </div>
        </div>
      </Animate>

{/* ---------------- TECH STACK CAROUSEL ---------------- */}
<Animate delay={0.3}>
  <h3 className="font-semibold mb-6 dark:text-white">
    ⚙️ Tech Stack
  </h3>

  <div className="relative overflow-hidden mb-16">
    <div className="flex gap-6 w-max animate-scroll hover:[animation-play-state:paused]">
      {infiniteStacks.map((tech, idx) => (
        <div
          key={idx}
          className="relative group min-w-[130px] h-32 flex flex-col items-center justify-center rounded-xl p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-borderGlow hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] transition-all duration-500"
        >
          <div className="flex flex-col items-center justify-center w-full h-full rounded-xl bg-white/5 dark:bg-black/50 backdrop-blur-lg animate-float">

            <div
              className={`w-14 h-14 rounded-full bg-gradient-to-r ${tech.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              <tech.icon className="w-7 h-7 text-white" />
            </div>

            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-pink-400 transition-colors duration-300">
              {tech.name}
            </span>

          </div>
        </div>
      ))}
    </div>
  </div>
</Animate>


      {/* ---------------- CERTIFICATIONS ---------------- */}
<Animate delay={0.4}>
  <h3 className="font-semibold mb-4 flex items-center gap-2 dark:text-white">
    <Award size={18} /> Certifications
  </h3>

  <div className="grid sm:grid-cols-3 gap-6">
    {certifications.map((cert, i) => (
      <div
        key={i}
        className="p-5 rounded-xl border bg-white/50 dark:bg-black/40 backdrop-blur-lg hover:shadow-lg transition duration-300"
      >
        <p className="font-semibold text-sm dark:text-white">
          {cert.title}
        </p>

        <p className="text-xs text-gray-500 mt-1">
          {cert.org} • {cert.year}
        </p>

        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-500 hover:underline mt-3 inline-block"
          >
            View Credential
          </a>
        )}
      </div>
    ))}
  </div>
</Animate>
    </section>
  );
}
