import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/sections/hero";
import { TechScroll } from "../components/ui/tech-scroll";
import { SkillsSection } from "../components/sections/skills";
import { ValuePropositionSection } from "../components/sections/value-proposition";
import { ExperienceSection } from "../components/sections/experience";
import { ProjectsSection } from "../components/sections/projects";
import { EducationSection } from "../components/sections/education";
import Personal from "../components/sections/personal";
import { ContactSection } from "../components/sections/contact";
import { Footer } from "../components/ui/footer";
import { TechJourney } from "../components/ui/tech-journey";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TechScroll />
        <SkillsSection />
        <ValuePropositionSection />
        <ExperienceSection />
        <TechJourney />
        <ProjectsSection />
        <EducationSection />
        <Personal />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
