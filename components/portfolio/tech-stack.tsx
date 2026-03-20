"use client";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Tailwind", icon: "🎨" },
  { name: "TypeScript", icon: "📘" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Framer", icon: "✨" },
];

export function TechStack() {
  return (
    <section className="py-16 border-y border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-[0.2em] mb-8">
          Built with Modern Tech Stack
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group cursor-default"
            >
              <span className="text-lg opacity-60 group-hover:opacity-100 transition-opacity">
                {tech.icon}
              </span>
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
