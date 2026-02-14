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
  SiTypescript,
  SiC,
  SiDart,
  SiFigma,
  SiCanva,
  SiGimp,
  SiGit,
  SiPostman,
  SiSpringboot,
  SiMui,
  SiHtml5,
  SiCss3,
  SiFastapi,
  SiJsonwebtokens
} from "react-icons/si";

import { FaJava, FaPython } from "react-icons/fa";


import Animate from "./Animate";

 import { ShieldCheck, BookOpen, Lock, Cpu, Award } from "lucide-react";

export default function About() {
  const [index, setIndex] = useState(0);

  /* ---------------- TECH STACKS ---------------- */
const techStacks = [
  // Languages
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: SiJavascript },
  { name: "C", icon: SiC },
  { name: "Python", icon: FaPython },
  { name: "Dart", icon: SiDart },

  // Web & Frameworks
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "MUI", icon: SiMui },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },

  // Mobile
  { name: "Flutter", icon: SiFlutter },

  // Databases
  { name: "MySQL", icon: SiMysql },
  { name: "Firebase", icon: SiFirebase },
  { name: "MongoDB", icon: SiMongodb },

  // Tools & Platforms
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },

  // APIs & Security
  { name: "REST APIs", icon: SiFastapi },
  { name: "JWT Authentication", icon: SiJsonwebtokens },

  // Design
  { name: "Figma", icon: SiFigma },
  { name: "Canva", icon: SiCanva },
  { name: "GIMP", icon: SiGimp },
];

const categorizedStacks = {
  "💻 Programming Languages": [
    { name: "Java", icon: FaJava },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: FaPython },
    { name: "C", icon: SiC },
    { name: "Dart", icon: SiDart },
  ],

  "🌐 Web Development": [
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "MUI", icon: SiMui },
  ],

  "🖥 Backend Development": [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "REST APIs", icon: SiFastapi },
    { name: "JWT Authentication", icon: SiJsonwebtokens },
  ],

  "🗄 Databases": [
    { name: "MySQL", icon: SiMysql },
    { name: "Firebase", icon: SiFirebase },
    { name: "MongoDB", icon: SiMongodb },
  ],

  "📱 Mobile Development": [
    { name: "Flutter", icon: SiFlutter },
  ],

  "⚙ Tools & Platforms": [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Postman", icon: SiPostman },
  ],

  "🎨 Design Tools": [
    { name: "Figma", icon: SiFigma },
    { name: "Canva", icon: SiCanva },
    { name: "GIMP", icon: SiGimp },
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight 
          bg-gradient-to-r from-purple-500 to-blue-500 
          bg-clip-text text-transparent ">
          About Me
        </h2>
        {/* <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mb-8" /> */}
        
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

      <div className="grid sm:grid-cols-2 gap-8 mb-16">

  {/* ---------------- University Card ---------------- */}
<div className="relative group p-6 rounded-2xl 
                bg-white/50 dark:bg-black/40 
                backdrop-blur-lg border border-white/10
                transition-all duration-500
                hover:scale-105 hover:-translate-y-2
                hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]">

  <h3 className="font-semibold mb-2 flex items-center gap-2 dark:text-white">
    🎓 Higher Education
  </h3>

  <div className="flex items-center justify-between mb-2">
    <h4 className="font-semibold dark:text-white">
      University of Moratuwa
    </h4>

    {/* Current Indicator */}
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
      <span className="text-xs text-pink-400 font-medium">
        Current
      </span>
    </div>
  </div>

  <p className="text-sm text-gray-600 dark:text-gray-400">
    BSc (Hons) in Information Technology <br />
    GPA: 3.49 (2023 – 2027)
  </p>
</div>



  {/* ---------------- School Card ---------------- */}
  <div className="group p-6 rounded-2xl 
                  bg-white/50 dark:bg-black/40 
                  backdrop-blur-lg border border-white/10
                  transition-all duration-500
                  hover:scale-105 hover:-translate-y-2
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]">

    <h3 className="font-semibold mb-2 dark:text-white">
      🧪 Secondary Education
    </h3>

    <h4 className="font-semibold mb-2 dark:text-white">
      Govt/ Science College - Matale
    </h4>

    <p className="text-sm text-gray-600 dark:text-gray-400">
      Biological Science <br />
      Biology (B), Physics (B), Chemistry (A)
    </p>
  </div>

</div>


{/* ---------------- TECH STACK CAROUSEL ---------------- */}
{/* ---------------- TECH STACK ---------------- */}

{/* Animate ONLY the heading */}
<Animate delay={0.3}>
   <h3 className="text-2xl font-bold pt-10 mb-6 
               bg-gradient-to-r from-purple-500 to-blue-500 
               bg-clip-text text-transparent">
  ⚙️ Skills and Technology
</h3>
  
</Animate>

{/* ❌ No Animate wrapper here */}
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

{/* Animate ONLY categorized grid */}
<Animate delay={0.4}>
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {Object.entries(categorizedStacks).map(([category, techs]) => (
      <div
        key={category}
        className="p-6 rounded-xl bg-white/50 dark:bg-black/40 backdrop-blur-lg border"
      >
        <h4 className="font-semibold mb-4 dark:text-white">
          {category}
        </h4>

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
        <h3 className="text-2xl font-bold pt-10 mb-6 
               bg-gradient-to-r from-purple-500 to-blue-500 
               bg-clip-text text-transparent">
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
