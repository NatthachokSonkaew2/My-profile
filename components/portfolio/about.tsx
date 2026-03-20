"use client";

import { GraduationCap, MapPin, Languages, Sparkles } from "lucide-react";

const stats = [
  { value: "6+", label: "Years Exp" },
  { value: "40+", label: "Ships" },
  { value: "10k+", label: "Commits" },
];

const infoCards = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.S. Computer Science",
    subtitle: "Top Tier University",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bangkok, Thailand",
    subtitle: "GMT +7 (Available Remotely)",
  },
  {
    icon: Languages,
    title: "Languages",
    value: "English (Fluent)",
    subtitle: "Thai (Native)",
  },
  {
    icon: Sparkles,
    title: "Interests",
    value: "Generative AI",
    subtitle: "Open Source Architecture",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
          The Engineering Ethos
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Philosophy & Stats */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-pretty">
                I specialize in building complex front-end systems that don&apos;t just work—they feel effortless. My approach combines rigorous engineering principles with a deep obsession for user experience.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                With over 6 years of experience, I&apos;ve led product teams in shipping high-scale applications used by millions. I believe the best code is not only clean but context-aware, solving for today&apos;s needs while anticipating tomorrow&apos;s scale.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 bg-card border border-border rounded-xl"
                >
                  <p className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {card.title}
                </p>
                <p className="text-foreground font-medium mb-1">{card.value}</p>
                <p className="text-sm text-muted-foreground">{card.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
