import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { Download, Code, Briefcase, GraduationCap, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Code, Briefcase, GraduationCap, Globe];

const ResumeSection = () => {
  const { t } = useLanguage();

  return (
    <section id="resume" className="relative section-padding bg-surface-dark text-surface-dark-foreground overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.06]" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path d="M0 300C200 200 400 400 600 300C800 200 1000 400 1200 300C1320 250 1400 350 1440 300" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" />
          <path d="M0 350C240 250 480 450 720 350C960 250 1200 450 1440 350" stroke="hsl(var(--green-glow))" strokeWidth="0.5" fill="none" />
        </svg>
        <div className="absolute -top-20 right-1/3 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">{t.resume.badge}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.resume.title}</h2>
          <p className="text-surface-dark-foreground/60 text-lg max-w-xl mx-auto mb-12">{t.resume.desc}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap justify-center gap-6 mb-14">
            {t.resume.competencies.map((label, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full border border-surface-dark-foreground/15 bg-surface-dark-foreground/5">
                  <Icon size={18} className="text-primary" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Button variant="hero" size="lg">
            <Download size={18} />
            {t.resume.cta}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResumeSection;
