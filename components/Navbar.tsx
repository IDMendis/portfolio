import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
 <nav className="
  fixed top-4 left-1/2 -translate-x-1/2
  w-[90%] max-w-6xl
  rounded-2xl
  bg-white/70 dark:bg-black/40
  backdrop-blur-xl
  border border-white/20 dark:border-white/10
  shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]
  z-50
">
      <div className="flex justify-between items-center px-6 py-3">
        <h1 className="font-semibold text-neutral-900 dark:text-white">Dinushi Mendis</h1>
        



        <div className="flex gap-6 items-center text-sm font-medium">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
