import ScrollReveal from "./ScrollReveal";
import { Users, Target, Lightbulb } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Users, Target, Lightbulb];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">{t.about.badge}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 whitespace-pre-line">
            {t.about.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-16">
            {t.about.desc}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {t.about.skills.map((s, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="group p-8 rounded-2xl bg-background/60 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
