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
    certificateUrl: "/certificates/learning-system.pdf",
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
    certificateUrl: "/certificates/learning-system.pdf",
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
    certificateUrl: "/certificates/learning-system.pdf",
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
    certificateUrl: "/certificates/learning-system.pdf",
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
    <section id="certificates" ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/20 to-background" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Professional Validation
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Industry certifications demonstrating expertise across security, development, and digital competency.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert, i) => (
            <div
              key={cert.title}
              className={`group relative ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`relative h-full p-6 rounded-3xl ${cert.bgColor} border-2 ${cert.borderColor} transition-all duration-500 ${
                  hoveredIndex === i ? "shadow-2xl -translate-y-2" : ""
                }`}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-linear-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Verified Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${cert.color} flex items-center justify-center mb-6 transition-transform duration-500 ${
                  hoveredIndex === i ? "scale-110 rotate-6" : ""
                }`}>
                  <cert.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
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
                <div className={`absolute bottom-0 right-0 w-24 h-24 rounded-tl-full bg-linear-to-br ${cert.color} opacity-10`} />
              </div>
            </div>
          ))}
        </div>

        {/* PDF Gallery */}
        <div className={`mt-8 pt-8 border-t border-border ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              CREDENTIALS
            </span>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Certificates
                </h3>
                <p className="text-muted-foreground">
                  Professional certifications and recognition earned through competitions and training
                </p>
              </div>
              <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium whitespace-nowrap ml-4">
                See All (8) →
              </a>
            </div>
          </div>

          {/* Certificates PDF Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificates.map((cert, i) => (
              <div
                key={`pdf-${cert.title}`}
                className={`group relative rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-500 ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${(i + 0.4) * 0.1}s` }}
              >
                {/* PDF Preview */}
                <div className="relative h-48 bg-white overflow-hidden">
                  <iframe
                    src={cert.certificateUrl}
                    className="w-full h-full border-none"
                    title={`${cert.title} Certificate`}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Certificate Info */}
                <div className="p-3 bg-background border-t border-border">
                  <h4 className="text-sm font-bold text-foreground mb-1">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
