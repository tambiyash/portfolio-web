import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import CurrentProject from "@/components/current-project";
import ContactSection from "@/components/contact-section";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar navItems={navItems}/>
      <Hero />
      <Features />
      <TechStack />
      <TechStack otherSkill/>
      <Projects />
      <CurrentProject />
      <ContactSection />
    </main>
  )
}