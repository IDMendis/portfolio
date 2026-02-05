"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Particles() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  if (!dimensions.width) return null;

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={i}
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: 0.2,
          }}
          animate={{
            y: ["0%", "100%"],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute w-1.5 h-1.5 rounded-full
            bg-gradient-to-r from-cyan-400 to-purple-500
          "
        />
      ))}
    </div>
  );
}
