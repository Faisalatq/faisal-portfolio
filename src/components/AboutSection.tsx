import ScrollReveal from "./ScrollReveal";
import { Users, Target, Lightbulb } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Users, Target, Lightbulb];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative section-padding bg-card overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute -top-20 -left-40 w-[600px] h-[600px] opacity-[0.04]" viewBox="0 0 600 600" fill="none">
          <path d="M300 50Q500 150 500 300Q500 500 300 550Q100 500 100 300Q100 150 300 50Z" stroke="hsl(var(--primary))" strokeWidth="1.5" />
          <path d="M300 100Q450 180 450 300Q450 450 300 500Q150 450 150 300Q150 180 300 100Z" stroke="hsl(var(--green-glow))" strokeWidth="1" />
        </svg>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-primary/[0.03] blur-[80px]" />
      </div>

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
                <div className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
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
