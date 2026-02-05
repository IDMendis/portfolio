"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import CosmicBackground from "./CosmicBackground";

import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaTelegram,
  FaCertificate,
} from "react-icons/fa";


export default function Hero() {
  const text = useTypewriter([
    "Dinushi Mendis",
    "a Software Engineer",
    "a Full-Stack Developer",
    "a Problem Solver",
    "a Tech Enthusiast",
  ]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <CosmicBackground />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {text}
          </span>
          <span className="text-pink-400 animate-pulse">_</span>
        </h1>

       {/* Profile Image */}
<div className="flex justify-center mb-8">
  <div className="relative">
    {/* This is border container */}
    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-lg overflow-hidden">
      {/* The inner wrapper for the image */}
      <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-200">
        <Image
          src="/images/me1.jpeg"
          alt="Dinushi Mendis"
          fill // This makes the image fill the parent div
          className="object-cover" // This ensures the image covers the circle without stretching
          priority
        />
      </div>
    </div>
    {/* Animated Ring */}
    <div className="absolute inset-0 rounded-full border border-pink-400 opacity-30 animate-ping" />
  </div>
</div>

        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Software Engineering Undergraduate actively seeking an internship
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:scale-105 transition"
          >
            Get Connected
          </a>
          <a
            href="/Dinushi-Mendis-Resume.pdf"
            className="px-8 py-4 rounded-full border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
        {/* Social Media Icons */}
<div className="mt-8 flex justify-center gap-6">
  <a
    href="https://www.linkedin.com/in/YOUR_LINKEDIN"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-[#0A66C2] transition transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]"
  >
    <FaLinkedin size={28} />
  </a>

  <a
    href="https://github.com/YOUR_GITHUB"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-white transition transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]
"
  >
    <FaGithub size={28} />
  </a>

  <a
    href="https://www.facebook.com/YOUR_FACEBOOK"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-[#1877F2] transition transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]"
  >
    <FaFacebook size={28} />
  </a>

  <a
    href="https://t.me/YOUR_TELEGRAM"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-[#229ED9] transition transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]"
  >
    <FaTelegram size={28} />
  </a>

  <a
    href="https://www.credly.com/users/YOUR_CREDLY"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-yellow-400 transition transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]"
  >
    <FaCertificate size={28} />
  </a>
</div>

      </motion.div>
    </section>
  );
}
