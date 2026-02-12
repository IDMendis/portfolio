"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("about");

  const sections = ["about", "skills", "projects", "contact"];

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const height = element.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetTop + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="
      fixed top-0 left-0 w-full
      bg-white/70 dark:bg-black/40
      backdrop-blur-xl
      border-b border-white/20 dark:border-white/10
      z-50
    ">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">

        {/* Logo */}
        <h1 className="font-semibold text-neutral-900 dark:text-white">
          Dinushi Mendis
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`relative transition-colors
                ${
                  active === section
                    ? "text-blue-500"
                    : "text-neutral-800 dark:text-neutral-200 hover:text-blue-500"
                }
              `}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}

              {/* Active underline */}
              {active === section && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 rounded-full"></span>
              )}
            </a>
          ))}

          <ThemeToggle />
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-neutral-900 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsOpen(false)}
              className={`text-base transition-colors
                ${
                  active === section
                    ? "text-blue-500"
                    : "text-neutral-800 dark:text-neutral-200 hover:text-blue-500"
                }
              `}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
