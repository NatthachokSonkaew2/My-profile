"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
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
    image: "/projects/dashboard.png",
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
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
    image: "/projects/fintech.png",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
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
    image: "/projects/ai-tool.png",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-xl text-pretty">
              Selected work that highlights my focus on high-performance architecture and intentional design.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              isActive={idx === currentIndex}
            />
          ))}
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

function ProjectCard({
  project,
  onClick,
  isActive,
}: {
  project: Project;
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group cursor-pointer rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden",
        isActive && "ring-2 ring-primary/20"
      )}
    >
      {/* Image Area */}
      <div
        className={cn(
          "h-48 relative overflow-hidden bg-gradient-to-br",
          project.gradient
        )}
      >
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <span className="text-2xl">
              {project.id === "1" ? "📊" : project.id === "2" ? "💳" : "🤖"}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech & CTA */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={cn(
            "p-8 md:p-12 border-b border-border bg-gradient-to-br relative",
            project.gradient
          )}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-background/50 hover:bg-background/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-12 h-12 rounded-xl bg-background/50 backdrop-blur-sm flex items-center justify-center mb-6 border border-border">
            <span className="text-xl">
              {project.id === "1" ? "📊" : project.id === "2" ? "💳" : "🤖"}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            {project.title}
          </h2>
          <p className="text-muted-foreground text-lg">{project.description}</p>
        </div>

        {/* Body */}
        <div className="p-8 md:p-12 space-y-10">
          <div>
            <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-4">
              The Problem
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.caseStudy.problem}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
              The Solution
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.caseStudy.solution}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Impact & Results
            </h3>
            <div className="bg-secondary border border-border rounded-xl p-6">
              <p className="text-foreground font-medium">
                {project.caseStudy.impact}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-sm text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="pt-6 border-t border-border flex flex-wrap gap-4">
            {project.caseStudy.liveLink && (
              <a
                href={project.caseStudy.liveLink}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            {project.caseStudy.repoLink && (
              <a
                href={project.caseStudy.repoLink}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-foreground font-medium border border-border hover:bg-secondary/80 transition-colors"
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
