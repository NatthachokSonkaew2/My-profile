"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, MapPin, Languages, Sparkles, Zap, Heart, Code2 } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "6+", label: "Years Exp", icon: Zap, color: "from-amber-400 to-orange-500" },
  { value: "40+", label: "Projects", icon: Code2, color: "from-blue-400 to-indigo-500" },
  { value: "10k+", label: "Commits", icon: Heart, color: "from-pink-400 to-rose-500" },
];

const infoCards = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.S. Computer Science",
    subtitle: "Top Tier University",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bangkok, Thailand",
    subtitle: "GMT +7 (Available Remotely)",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Languages,
    title: "Languages",
    value: "English (Fluent)",
    subtitle: "Thai (Native)",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Interests",
    value: "Generative AI",
    subtitle: "Open Source Architecture",
    color: "from-amber-400 to-orange-500",
  },
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<number[]>([0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const targets = [6, 40, 10];
          targets.forEach((target, idx) => {
            let current = 0;
            const step = target / 30;
            const interval = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(interval);
              }
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[idx] = Math.floor(current);
                return newCounters;
              });
            }, 50);
          });
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
    <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-secondary/30" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Engineering Ethos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining rigorous engineering principles with a deep obsession for user experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Stats */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            {/* Profile Image with Creative Frame */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-violet-500 to-pink-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
              
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-violet-600 p-1">
                <div className="relative aspect-[4/3] rounded-[22px] overflow-hidden bg-secondary">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_xj8gbpxj8gbpxj8g-uNjLi6Fxs1vM5EhYwQPKmxjbm5p8aC.png"
                    alt="Natthachok Sonkaew - Professional"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  
                  {/* Overlay Pattern */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                </div>
              </div>

              {/* Floating Quote */}
              <div className="absolute -bottom-6 -right-6 max-w-xs p-6 rounded-2xl bg-card border border-border shadow-xl animate-float">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  &ldquo;The best code is not only clean but context-aware, solving for today&apos;s needs while anticipating tomorrow&apos;s scale.&rdquo;
                </p>
                <p className="text-xs text-primary font-medium mt-3">- My Engineering Philosophy</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`group relative p-6 rounded-2xl bg-card border border-border overflow-hidden transition-all hover:border-primary/30 hover:shadow-lg ${
                    isVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-1">
                    {counters[i]}+
                  </p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Philosophy & Info Cards */}
          <div className="space-y-8">
            {/* Philosophy Card */}
            <div 
              className={`p-8 rounded-3xl bg-card border border-border shadow-sm ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">My Approach</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I specialize in building complex front-end systems that don&apos;t just work&mdash;they feel effortless. My approach combines rigorous engineering principles with a deep obsession for user experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 6 years of experience, I&apos;ve led product teams in shipping high-scale applications used by millions. I believe the best code is not only clean but context-aware, solving for today&apos;s needs while anticipating tomorrow&apos;s scale.
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {infoCards.map((card, i) => (
                <div
                  key={card.title}
                  className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1 ${
                    isVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {card.title}
                  </p>
                  <p className="text-foreground font-semibold mb-1">{card.value}</p>
                  <p className="text-sm text-muted-foreground">{card.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
