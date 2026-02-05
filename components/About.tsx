"use client";
import { useEffect, useState } from "react";
import {
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Award,
} from "lucide-react";
import Animate from "./Animate";

export default function About() {
  const [index, setIndex] = useState(0);

  /* ---------------- TECH STACKS ---------------- */
  const techStacks = [
    { name: "React", icon: "/portfolio_images/react.png" },
    { name: "Next.js", icon: "/portfolio_images/next.png" },
    { name: "Tailwind", icon: "/portfolio_images/tailwind.png" },
    { name: "Node.js", icon: "/portfolio_images/node.png" },
    { name: "Python", icon: "/portfolio_images/python.png" },
    { name: "Flask", icon: "/portfolio_images/flask.png" },
    { name: "MongoDB", icon: "/portfolio_images/mongodb.png" },
    { name: "Firebase", icon: "/portfolio_images/firebase.png" },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % techStacks.length),
      2000
    );
    return () => clearInterval(timer);
  }, [techStacks.length]);

  /* ---------------- CERTIFICATIONS ---------------- */
  const certifications = [
    {
      title: "Python for Beginners",
      org: "Coursera",
    },
    {
      title: "Frontend Development with React",
      org: "Meta",
    },
    {
      title: "UI/UX Design Fundamentals",
      org: "Google",
    },
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
                src="/portfolio_images/my_profile.jpg"
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
              🎓 Education
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              BSc (Hons) in Information Technology<br />
              University of Moratuwa<br />
              GPA: 3.49 (2023 – 2027)
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/50 dark:bg-black/40 backdrop-blur-lg border">
            <h3 className="font-semibold mb-2 dark:text-white">🧪 A/L Stream</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Biological Science<br />
              Biology (B), Physics (B), Chemistry (A)
            </p>
          </div>
        </div>
      </Animate>

      {/* ---------------- TECH STACK CAROUSEL ---------------- */}
      <Animate delay={0.3}>
        <h3 className="font-semibold mb-4 dark:text-white">⚙️ Tech Stack</h3>

        <div className="relative overflow-hidden mb-16">
          <div
            className="flex gap-4 transition-transform duration-500"
            style={{ transform: `translateX(-${index * 110}px)` }}
          >
            {techStacks.map((tech, i) => (
              <div
                key={i}
                className="min-w-[90px] h-24 flex flex-col items-center justify-center rounded-xl border bg-white/50 dark:bg-black/40 backdrop-blur-lg"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 mb-2"
                />
                <span className="text-xs">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={() =>
                setIndex((index - 1 + techStacks.length) % techStacks.length)
              }
              className="p-2 rounded-full border"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setIndex((index + 1) % techStacks.length)}
              className="p-2 rounded-full border"
            >
              <ChevronRight size={16} />
            </button>
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
              className="p-5 rounded-xl border bg-white/50 dark:bg-black/40 backdrop-blur-lg"
            >
              <p className="font-medium text-sm">{cert.title}</p>
              <p className="text-xs text-gray-500">{cert.org}</p>
            </div>
          ))}
        </div>
      </Animate>
    </section>
  );
}
