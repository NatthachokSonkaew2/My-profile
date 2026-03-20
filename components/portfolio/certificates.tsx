"use client";

import { Shield, Code2, Monitor, Award } from "lucide-react";

const certificates = [
  {
    icon: Shield,
    title: "Cyber Security",
    subtitle: "Certified Professional",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Code2,
    title: "Java Expert",
    subtitle: "Oracle Certified",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Monitor,
    title: "IC3 GS5",
    subtitle: "Digital Literacy",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Award,
    title: "Programming",
    subtitle: "Advanced Certification",
    color: "text-sky-400",
    bgColor: "bg-sky-500/10",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Professional Validation
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          Industry certifications demonstrating expertise across security, development, and digital competency.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="group flex flex-col items-center text-center p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all hover:scale-[1.02]"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${cert.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <cert.icon className={`w-8 h-8 ${cert.color}`} />
              </div>
              <h3 className="text-foreground font-semibold mb-1">{cert.title}</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                {cert.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
