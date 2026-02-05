import Animate from "./Animate";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-24">
      <Animate>
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
          Software Engineering undergraduate pursuing a BSc (Hons) in
          Information Technology at the University of Moratuwa. Experienced in
          full-stack web and mobile development with a strong focus on secure
          backend systems and clean UI design.
        </p>
      </Animate>

      <Animate delay={0.2}>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white/50 dark:bg-black/40 backdrop-blur-lg border">
            <h3 className="font-semibold mb-2">🎓 Education</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              BSc (Hons) IT – University of Moratuwa<br />
              GPA: 3.49 (2023–2027)
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/50 dark:bg-black/40 backdrop-blur-lg border">
            <h3 className="font-semibold mb-2">🧪 A/L Stream</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Biological Science<br />
              Biology (B), Physics (B), Chemistry (A)
            </p>
          </div>
        </div>
      </Animate>
    </section>
  );
}
