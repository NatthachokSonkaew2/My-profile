"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
  gradient: string;
  tech: string[];
  caseStudy: {
    problem: string;
    solution: string;
    impact: string;
    liveLink?: string;
    repoLink?: string;
  };
}

const projects: Project[] = [
  {
    id: "1",
    title: "SaaS Dashboard Flux",
    description: "Redesigning the complex data visualization experience for 10k+ users with sub-100ms interaction latency.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "blue",
    gradient: "from-blue-500/20 via-indigo-500/10 to-violet-500/5",
    tech: ["Next.js", "D3.js", "Tailwind"],
    caseStudy: {
      problem: "Enterprise clients needed real-time analytics dashboard but existing solution had 4+ second load times, causing user frustration and support tickets.",
      solution: "Implemented virtualized rendering for 100k+ data points, web workers for heavy calculations, and optimistic UI updates. Built custom chart components with D3.js for smooth 60fps animations.",
      impact: "Reduced Time to Interactive by 85%. Customer satisfaction scores increased by 45%. Zero performance-related support tickets in 6 months post-launch.",
      liveLink: "#",
      repoLink: "#",
    },
  },
  {
    id: "2",
    title: "Fintech Mobile UI",
    description: "Developing a secure, animation-rich mobile interface for institutional-grade asset management and trading.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    color: "emerald",
    gradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/5",
    tech: ["React Native", "Reanimated", "TypeScript"],
    caseStudy: {
      problem: "Traditional banking apps felt outdated and lacked the smooth interactions that modern users expect. Security protocols also needed enhancement.",
      solution: "Built gesture-driven interfaces with React Native Reanimated 3. Implemented biometric authentication flow and secure enclave for sensitive data. Created micro-interactions that feel native to each platform.",
      impact: "App Store rating improved from 3.2 to 4.8 stars. User engagement increased 60%. Featured in Apple's 'Apps We Love' section.",
      liveLink: "#",
      repoLink: "#",
    },
  },
  {
    id: "3",
    title: "AI Orchestration Tool",
    description: "Engineered a node-based interface for visual AI model chaining and automated workflow orchestration.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    color: "amber",
    gradient: "from-amber-500/20 via-orange-500/10 to-red-500/5",
    tech: ["React Flow", "Python", "FastAPI"],
    caseStudy: {
      problem: "Data scientists spent 70% of their time writing boilerplate code to connect AI models instead of focusing on experimentation and innovation.",
      solution: "Created visual node editor with React Flow for drag-and-drop AI pipeline building. Backend orchestration with FastAPI and async processing. Real-time execution monitoring and result visualization.",
      impact: "Reduced pipeline creation time by 90%. Enabled non-technical team members to build AI workflows. Processing 2M+ API calls monthly.",
      liveLink: "#",
      repoLink: "#",
    },
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-linear-to-bl from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-linear-to-tr from-violet-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my best work, highlighting my focus on high-performance architecture, beautiful interfaces, and intentional design decisions.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative ${isVisible ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${idx * 0.15}s` }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={cn(
                  "relative h-full rounded-3xl overflow-hidden bg-card border-2 transition-all duration-500 cursor-pointer",
                  hoveredIndex === idx ? "border-primary shadow-2xl shadow-primary/20 scale-[1.02]" : "border-border hover:border-primary/30"
                )}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image with Parallax Effect */}
                <div className="relative h-64 overflow-hidden">
                  <div className={cn(
                    "absolute inset-0 bg-linear-to-br",
                    project.gradient,
                    "z-10"
                  )} />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-700",
                      hoveredIndex === idx ? "scale-110" : "scale-100"
                    )}
                    unoptimized
                  />
                  
                  {/* Overlay on Hover */}
                  <div className={cn(
                    "absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/40 to-transparent z-20 flex items-end justify-center pb-6 transition-opacity duration-500",
                    hoveredIndex === idx ? "opacity-100" : "opacity-0"
                  )}>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-semibold hover:bg-primary hover:text-white transition-colors">
                      View Case Study
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Floating Tech Tags */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-30">
                    {project.tech.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/90 backdrop-blur-sm text-foreground shadow-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Bottom Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {project.tech.map((t, i) => (
                        <div
                          key={t}
                          className={cn(
                            "w-8 h-8 rounded-full border-2 border-card flex items-center justify-center text-xs font-bold",
                            i === 0 ? "bg-primary text-white" : i === 1 ? "bg-secondary text-foreground" : "bg-muted text-muted-foreground"
                          )}
                        >
                          {t.slice(0, 1)}
                        </div>
                      ))}
                    </div>
                    <ArrowUpRight className={cn(
                      "w-6 h-6 transition-all duration-300",
                      hoveredIndex === idx ? "text-primary translate-x-1 -translate-y-1" : "text-muted-foreground"
                    )} />
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className={cn(
                  "absolute top-0 right-0 w-24 h-24 transition-transform duration-500",
                  hoveredIndex === idx ? "translate-x-0 translate-y-0" : "translate-x-12 -translate-y-12"
                )}>
                  <div className={cn(
                    "w-full h-full rounded-bl-full",
                    `bg-linear-to-br ${project.gradient}`
                  )} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className={`text-center mt-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-primary transition-colors group"
          >
            View all projects
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-md animate-scale-in"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Image */}
        <div className="relative h-80 overflow-hidden rounded-t-3xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>

          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <h2 className="text-4xl font-bold text-foreground">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 md:p-12 space-y-10">
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-red-50 border border-red-100">
              <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
                The Problem
              </h3>
              <p className="text-foreground leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
              <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                The Solution
              </h3>
              <p className="text-foreground leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                Impact & Results
              </h3>
              <p className="text-foreground leading-relaxed font-medium">
                {project.caseStudy.impact}
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="pt-6 border-t border-border flex flex-wrap gap-4">
            {project.caseStudy.liveLink && (
              <a
                href={project.caseStudy.liveLink}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            {project.caseStudy.repoLink && (
              <a
                href={project.caseStudy.repoLink}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-foreground font-semibold border border-border hover:bg-secondary/80 transition-colors"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
