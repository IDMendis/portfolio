const skills = ["react", "node", "python", "flutter"];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 dark:bg-neutral-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {skills.map(skill => (
            <div key={skill} className="text-center">
              <img src={`/skills/${skill}.png`} alt={skill} className="w-[60px] h-[60px] mx-auto" />
              <p className="mt-2 capitalize">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
