import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import CurrentProject from "@/components/current-project";
import ContactSection from "@/components/contact-section";
import { navItems, testimonials } from "@/data";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar navItems={navItems}/>
      <Hero />
      <Features />
      <TechStack />
      <TechStack otherSkill/>
      <AnimatedTestimonials
        testimonials={testimonials}
        heading={<>What my <span className="text-3xl md:text-4xl font-bold text-purple-500">former colleagues</span> say about me?</>}
      />
      <Projects />
      <CurrentProject />
      <ContactSection />
    </main>
  )
}