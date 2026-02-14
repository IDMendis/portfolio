"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateProps {
  children: ReactNode;
  delay?: number;
}

export default function Animate({ children, delay = 0 }: AnimateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
    >
      {children}
    </motion.div>
  );
}
