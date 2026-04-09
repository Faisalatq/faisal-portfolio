import { LanguageProvider } from "@/i18n/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <LanguageProvider>
    <Header />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <ResumeSection />
    <ContactSection />
    <Footer />
  </LanguageProvider>
);

export default Index;
