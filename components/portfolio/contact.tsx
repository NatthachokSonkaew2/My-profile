"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-800 hover:text-white" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600 hover:text-white" },
  { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500 hover:text-white" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Let&apos;s Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Have a project in mind?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s build something exceptional together. I&apos;m currently open to new opportunities and interesting collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - Contact Info */}
          <div className={`lg:col-span-2 space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Email me
                    </p>
                    <a
                      href="mailto:hello@natthachok.dev"
                      className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      hello@natthachok.dev
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      Bangkok, Thailand
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Timezone
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      GMT +7 (ICT)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className={`lg:col-span-3 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
            <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-xl">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === "name" || formData.name 
                          ? "-top-2.5 text-xs bg-card px-2 text-primary" 
                          : "top-4 text-muted-foreground"
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 rounded-xl bg-secondary/50 border-2 border-border text-foreground focus:outline-none focus:border-primary focus:bg-card transition-all"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === "email" || formData.email 
                          ? "-top-2.5 text-xs bg-card px-2 text-primary" 
                          : "top-4 text-muted-foreground"
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 rounded-xl bg-secondary/50 border-2 border-border text-foreground focus:outline-none focus:border-primary focus:bg-card transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === "message" || formData.message 
                        ? "-top-2.5 text-xs bg-card px-2 text-primary" 
                        : "top-4 text-muted-foreground"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="w-full px-4 py-4 rounded-xl bg-secondary/50 border-2 border-border text-foreground focus:outline-none focus:border-primary focus:bg-card transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-gradient-to-r from-primary to-blue-700 text-primary-foreground font-semibold text-lg transition-all hover:shadow-xl hover:shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
