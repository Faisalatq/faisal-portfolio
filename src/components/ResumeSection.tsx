import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { Download, Code, Briefcase, GraduationCap, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import AnimatedBackground from "./AnimatedBackground";

const icons = [Code, Briefcase, GraduationCap, Globe];

const ResumeSection = () => {
  const { t } = useLanguage();

  return (
    <section id="resume" className="relative section-padding bg-surface-dark text-surface-dark-foreground overflow-hidden">
      <AnimatedBackground variant="resume" />

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
