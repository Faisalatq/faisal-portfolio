import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const ExperienceSection = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section id="experience" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">{t.experience.badge}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">{t.experience.title}</h2>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden md:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12 md:space-y-0">
            {t.experience.items.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <div className={`relative md:flex md:items-center md:mb-16 ${isLeft ? "" : "md:flex-row-reverse"}`}>
                    <div className={`md:w-1/2 ${isLeft ? (isRtl ? "md:pl-16 md:text-left" : "md:pr-16 md:text-right") : (isRtl ? "md:pr-16" : "md:pl-16")}`}>
                      <span className="text-xs font-semibold text-primary tracking-widest uppercase">{exp.period}</span>
                      <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">{exp.org}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-3">{exp.desc}</p>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                    <div className="md:w-1/2" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
