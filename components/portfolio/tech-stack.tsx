"use client";

import { useEffect, useRef, useState } from "react";

const technologies = [
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "Tailwind", color: "from-teal-400 to-cyan-500" },
  { name: "TypeScript", color: "from-blue-400 to-blue-600" },
  { name: "Next.js", color: "from-gray-600 to-gray-800" },
  { name: "Node.js", color: "from-green-400 to-emerald-600" },
  { name: "Framer", color: "from-pink-400 to-purple-500" },
  { name: "Figma", color: "from-orange-400 to-pink-500" },
  { name: "GraphQL", color: "from-pink-500 to-rose-600" },
];

export function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/30 to-background" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-[0.25em] mb-12 font-medium">
          Built with Modern Tech Stack
        </p>
        
        {/* Animated Tech Cards */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {technologies.map((tech, i) => (
            <div
              key={tech.name}
              className={`group relative px-6 py-4 rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-default ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-linear-to-r ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
              <div className={`absolute inset-px rounded-2xl bg-card -z-10`} />
              
              {/* Content */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${tech.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  <span className="text-white text-sm font-bold">
                    {tech.name.slice(0, 2)}
                  </span>
                </div>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Line */}
        <div className="mt-16 flex items-center justify-center">
          <div className="h-px w-32 bg-linear-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
}
