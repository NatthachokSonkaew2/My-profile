"use client";

import { ArrowRight, Download, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for select projects
            </div>

            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight text-balance">
                Natthachok
                <br />
                <span className="text-muted-foreground">Sonkaew</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium">
                Product Engineer & UX Strategist
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg text-pretty">
              Building high-performance, product-minded interfaces for modern tech companies. Bridging the gap between aesthetic precision and technical excellence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-foreground font-medium border border-border hover:bg-secondary/80 transition-all"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Content - Code Card */}
          <div className="relative">
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">engineer.ts</span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <pre className="text-muted-foreground">
                  <code>
                    <span className="text-primary">const</span>{" "}
                    <span className="text-foreground">engineer</span> = {"{"}
                    {"\n"}
                    {"  "}
                    <span className="text-muted-foreground">name:</span>{" "}
                    <span className="text-emerald-400">&apos;Natthachok&apos;</span>,{"\n"}
                    {"  "}
                    <span className="text-muted-foreground">role:</span>{" "}
                    <span className="text-emerald-400">&apos;Senior Product Engineer&apos;</span>,{"\n"}
                    {"  "}
                    <span className="text-muted-foreground">focus:</span> [
                    <span className="text-amber-400">&apos;UX&apos;</span>,{" "}
                    <span className="text-amber-400">&apos;Performance&apos;</span>,{" "}
                    <span className="text-amber-400">&apos;Scalability&apos;</span>],{"\n"}
                    {"  "}
                    <span className="text-muted-foreground">passion:</span>{" "}
                    <span className="text-emerald-400">&apos;Building the Future&apos;</span>
                    {"\n"}
                    {"}"};
                  </code>
                </pre>
              </div>

              {/* Performance Badge */}
              <div className="mx-6 mb-6">
                <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-lg">⚡</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Performance Score</p>
                    <p className="text-lg font-semibold text-foreground">99/100</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-2xl blur-2xl animate-pulse-glow" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
