"use client";

import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_15%_20%,#7c3aed22,transparent_35%),
              radial-gradient(circle_at_85%_25%,#22d3ee22,transparent_35%),
              radial-gradient(circle_at_50%_80%,#ec489922,transparent_40%)]
        "
      />
    </div>
  );
}
