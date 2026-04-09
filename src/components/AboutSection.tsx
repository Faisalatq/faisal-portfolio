import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative section-padding overflow-hidden bg-surface-dark text-surface-dark-foreground">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            {t.about.badge}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            {t.about.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-surface-dark-foreground/80 text-lg md:text-xl leading-relaxed max-w-3xl mb-12">
            {t.about.desc}
          </p>
        </ScrollReveal>

        {/* Skills grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {t.about.skills.map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-surface-dark-foreground/10 bg-surface-dark-foreground/5 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-surface-dark-foreground/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Button variant="hero-outline" size="lg" className="border-surface-dark-foreground/40 text-surface-dark-foreground hover:bg-surface-dark-foreground hover:text-surface-dark">
            <ArrowDown size={18} />
            {t.about.cvButton}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
