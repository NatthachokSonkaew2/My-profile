"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Code2, Monitor, Award, CheckCircle2 } from "lucide-react";

const certificates = [
  {
    icon: Shield,
    title: "Cyber Security",
    subtitle: "Certified Professional",
    issuer: "CompTIA",
    year: "2023",
    color: "from-emerald-400 to-teal-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    icon: Code2,
    title: "Java Expert",
    subtitle: "Oracle Certified",
    issuer: "Oracle",
    year: "2022",
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: Monitor,
    title: "IC3 GS5",
    subtitle: "Digital Literacy",
    issuer: "Certiport",
    year: "2021",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    icon: Award,
    title: "Programming",
    subtitle: "Advanced Certification",
    issuer: "Meta",
    year: "2024",
    color: "from-violet-400 to-purple-500",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
  },
];

export function Certificates() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certificates" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Validation
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Industry certifications demonstrating expertise across security, development, and digital competency.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <div
              key={cert.title}
              className={`group relative ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`relative h-full p-8 rounded-3xl ${cert.bgColor} border-2 ${cert.borderColor} transition-all duration-500 ${
                  hoveredIndex === i ? "shadow-2xl -translate-y-2" : ""
                }`}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Verified Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6 transition-transform duration-500 ${
                  hoveredIndex === i ? "scale-110 rotate-6" : ""
                }`}>
                  <cert.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                    {cert.subtitle}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="pt-4 border-t border-current/10 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{cert.issuer}</span>
                    <span className="font-semibold text-foreground">{cert.year}</span>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 rounded-tl-full bg-gradient-to-br ${cert.color} opacity-10`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
          <p className="text-muted-foreground mb-4">
            Continuously learning and earning new certifications
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-border text-foreground font-medium hover:bg-secondary/80 transition-colors"
          >
            <Award className="w-4 h-4" />
            View All Credentials
          </a>
        </div>
      </div>
    </section>
  );
}
