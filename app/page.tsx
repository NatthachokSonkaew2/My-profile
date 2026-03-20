import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { TechStack } from "@/components/portfolio/tech-stack";
import { Projects } from "@/components/portfolio/projects";
import { About } from "@/components/portfolio/about";
import { Certificates } from "@/components/portfolio/certificates";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <About />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
