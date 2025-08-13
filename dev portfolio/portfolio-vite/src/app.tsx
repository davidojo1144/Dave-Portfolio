import { NavBar } from "./components/nav-bar"
import { HeroSection } from "./components/hero-section"
import { SkillsMarquee } from "./components/skills-marquee"
import { ProjectsSection } from "./components/projects-section"
import { ExperienceTimeline } from "./components/experience-timeline"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"

export default function App() {
  return (
    <main className="min-h-dvh flex flex-col">
      <NavBar />
      <HeroSection />
      <section id="skills" className="py-16 md:py-20">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Tech I work with</h2>
        </div>
        <SkillsMarquee />
      </section>
      <ProjectsSection />
      <ExperienceTimeline />
      <ContactSection />
      <Footer />
    </main>
  )
}
