"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download, Sparkles, Play } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full animate-morph animate-pulse-glow"
          style={{
            background: "linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(147, 51, 234, 0.1))",
            filter: "blur(80px)",
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full animate-morph animate-pulse-glow"
          style={{
            background: "linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(37, 99, 235, 0.1))",
            filter: "blur(60px)",
            animationDelay: "2s",
            transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)`,
          }}
        />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-[15%] w-20 h-20 border-2 border-primary/20 rounded-2xl animate-float rotate-12" />
        <div className="absolute top-[40%] left-[10%] w-16 h-16 border-2 border-pink-400/20 rounded-full animate-float-delayed" />
        <div className="absolute bottom-[30%] right-[10%] w-12 h-12 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-lg animate-float rotate-45" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[60%] left-[20%] w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full animate-bounce-subtle" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isLoaded ? "animate-slide-up" : "opacity-0"}`}>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-border shadow-lg shadow-primary/5 hover:shadow-primary/10 transition-shadow">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-foreground">Available for select projects</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>

            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
                  Natthachok
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary via-blue-600 to-violet-600 bg-clip-text text-transparent animate-gradient-shift">
                  Sonkaew
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-violet-500 rounded-full" />
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Product Engineer & UX Strategist
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg text-pretty">
              Building high-performance, product-minded interfaces for modern tech companies. Bridging the gap between aesthetic precision and technical excellence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-primary to-blue-700 text-primary-foreground font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-card text-foreground font-semibold border-2 border-border hover:border-primary/50 hover:bg-secondary transition-all hover:shadow-lg"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce-subtle" />
                Download CV
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-8 pt-4">
              {[
                { value: "6+", label: "Years" },
                { value: "40+", label: "Projects" },
                { value: "99", label: "Perf Score" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image with Effects */}
          <div className={`relative ${isLoaded ? "animate-slide-in-right" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            {/* Main Image Container */}
            <div 
              className="relative group"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              {/* Decorative Ring */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-violet-500/20 to-pink-500/20 animate-rotate-slow opacity-60" style={{ animationDuration: "30s" }} />
              
              {/* Image Frame */}
              <div className="relative rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-primary to-violet-600 p-1 shadow-2xl shadow-primary/20">
                <div className="relative aspect-[4/5] rounded-[1.25rem] overflow-hidden bg-secondary">
                  {/* Profile Image */}
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vwC6gGDub2xKwDq00nSUEgjVcIqXCH.png"
                    alt="Natthachok Sonkaew"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                    unoptimized
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Info */}
                  <div className="absolute bottom-0 inset-x-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Watch Introduction</p>
                        <p className="text-sm text-white/80">2 min video</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 p-4 rounded-2xl bg-card border border-border shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">99</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Performance</p>
                    <p className="font-semibold text-foreground">Score</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 p-4 rounded-2xl bg-card border border-border shadow-xl animate-float-delayed" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-violet-600 flex items-center justify-center">
                    <span className="text-white text-lg">{"</>"}</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Clean Code</p>
                    <p className="font-semibold text-foreground">Advocate</p>
                  </div>
                </div>
              </div>

              {/* Tech Stack Floating */}
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 hidden xl:flex flex-col gap-3">
                {["React", "Next.js", "TS"].map((tech, i) => (
                  <div 
                    key={tech}
                    className="w-12 h-12 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center text-xs font-semibold text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default animate-bounce-subtle"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
