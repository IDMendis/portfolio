"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        p-2 rounded-full 
        transition-all duration-300
        hover:rotate-12 hover:scale-110
        bg-white/30 dark:bg-black/30
        backdrop-blur-md
      "
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400 transition-all duration-300" />
      ) : (
        <Moon className="text-blue-600 transition-all duration-300" />
      )}
    </button>
  );
}
