"use client";
import { useEffect, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiFlutter,
  SiDocker,
  SiGithub,
  SiJavascript,
  SiTypescript
} from "react-icons/si";

import { FaJava, FaPython } from "react-icons/fa";


import Animate from "./Animate";

 import { ShieldCheck, BookOpen, Lock, Cpu, Award } from "lucide-react";

export default function About() {
  const [index, setIndex] = useState(0);

  /* ---------------- TECH STACKS ---------------- */
/* ---------------- TECH STACK DATA ---------------- */

const techStacks = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "Java", icon: FaJava },
  { name: "Python", icon: FaPython },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "GitHub", icon: SiGithub },
];

const categorizedStacks = {
  "🌐 Web Development": [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
  ],
  "🖥 Backend": [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Java", icon: FaJava },
    { name: "Python", icon: FaPython },
  ],
  "🗄 Database": [
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Firebase", icon: SiFirebase },
  ],
  "📱 Mobile": [
    { name: "Flutter", icon: SiFlutter },
  ],
  "⚙ DevOps & Tools": [
    { name: "Docker", icon: SiDocker },
    { name: "GitHub", icon: SiGithub },
  ],
};


const infiniteStacks = [...techStacks, ...techStacks];


const certifications = [
  {
    title: "Authentication and Authorization in Web & API Security",
    org: "Linux Foundation",
    year: "2025",
    icon: Lock,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Introduction to Cybersecurity",
    org: "Cisco Networking Academy",
    year: "2025",
    icon: ShieldCheck,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Blockchain: Understanding Its Uses and Implications",
    org: "Linux Foundation",
    year: "2025",
    icon: Cpu,
    color: "from-emerald-500 to-green-600"
  },
  {
    title: "Complete Guide to Cybersecurity: A Practical Approach",
    org: "LinkedIn Learning",
    year: "2025",
    icon: BookOpen,
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "Programming Foundations: Software Testing / QA",
    org: "LinkedIn Learning",
    year: "2025",
    icon: Award,
    color: "from-pink-500 to-rose-500"
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
{/* ---------------- TECH STACK CAROUSEL ---------------- */}
<Animate delay={0.3}>
  <h3 className="font-semibold mb-6 dark:text-white">
    ⚙️ Tech Stack
  </h3>

  <div className="relative overflow-hidden mb-16">
    <div className="flex gap-10 w-max animate-scroll hover:[animation-play-state:paused]">
      {infiniteStacks.map((tech, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center min-w-[120px] group"
        >
          <tech.icon className="text-5xl text-gray-600 dark:text-gray-300 group-hover:text-pink-500 transition duration-300" />
          <span className="text-sm mt-3 text-gray-600 dark:text-gray-400 group-hover:text-pink-400">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Categorized Stacks */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {Object.entries(categorizedStacks).map(([category, techs]) => (
      <div key={category} className="p-6 rounded-xl bg-white/50 dark:bg-black/40 backdrop-blur-lg border">
        <h4 className="font-semibold mb-4 dark:text-white">{category}</h4>
        <div className="grid grid-cols-3 gap-4">
          {techs.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center group">
              <tech.icon className="text-4xl text-gray-600 dark:text-gray-300 group-hover:text-pink-500 transition duration-300" />
              <span className="text-xs mt-2 text-center text-gray-600 dark:text-gray-400 group-hover:text-pink-400">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</Animate>



      {/* ---------------- CERTIFICATIONS ---------------- */}

      <Animate delay={0.4}>
        <h3 className="font-semibold mb-6 dark:text-white">
           Certifications
        </h3>
      </Animate>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {certifications.map((cert, i) => (
    <Animate key={i} delay={0.1 * i}>
      <div
        className="
        rounded-3xl p-6
        bg-white/5 dark:bg-white/5
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
        hover:-translate-y-2
        transition-all duration-500
        "
      >
        {/* Icon Badge */}
        <div
          className={`w-14 h-14 rounded-full bg-gradient-to-br ${cert.color}
                      flex items-center justify-center mb-5
                      shadow-md`}
        >
          <cert.icon className="w-6 h-6 text-white" />
        </div>

        {/* Title */}
        <h4 className="text-sm font-semibold dark:text-white leading-snug mb-3">
          {cert.title}
        </h4>

        {/* Org + Year */}
        <p className="text-sm text-gray-400">
          {cert.org} • {cert.year}
        </p>
      </div>
    </Animate>
  ))}
</div>


    </section>
  );
}
