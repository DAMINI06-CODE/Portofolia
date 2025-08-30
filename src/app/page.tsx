import { AboutSection } from "@/components/about-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { EducationSection } from "@/components/education-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { InternshipsSection } from "@/components/internships-section";
import { ProjectsSection } from "@/components/projects-section";
import { PublicationsSection } from "@/components/publications-section";
import { SkillsSection } from "@/components/skills-section";
import { sendVisitNotificationEmail } from "./actions";

export default function Home() {
  sendVisitNotificationEmail();
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <InternshipsSection />
        <CertificationsSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
