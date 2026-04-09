import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    period: "2024 — Present",
    title: "Committee Leader",
    org: "University Student Council",
    desc: "Managed 40+ members, handled budgeting exceeding $50K, and secured strategic partnerships with industry leaders.",
  },
  {
    period: "2023 — 2024",
    title: "Project Manager",
    org: "KSU CROWN eSports",
    desc: "Organized large-scale eSports tournaments, coordinating logistics, sponsorships, and cross-team collaboration.",
  },
  {
    period: "2022 — 2023",
    title: "Technical Consultant",
    org: "Freelance",
    desc: "Provided consulting services for startups, focusing on system architecture, process optimization, and digital strategy.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="relative section-padding overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <svg className="absolute top-10 right-0 w-full h-[300px] opacity-[0.03]" viewBox="0 0 1440 300" fill="none" preserveAspectRatio="none">
        <path d="M0 150C360 50 720 250 1080 150C1260 100 1380 180 1440 150V300H0Z" fill="hsl(var(--primary))" />
      </svg>
      <svg className="absolute -bottom-10 -left-20 w-[400px] h-[400px] opacity-[0.05]" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="180" stroke="hsl(var(--green-glow))" strokeWidth="1" />
        <circle cx="200" cy="200" r="120" stroke="hsl(var(--primary))" strokeWidth="0.75" />
      </svg>
      <div className="absolute top-1/3 right-10 grid grid-cols-4 gap-3 opacity-[0.06]">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-primary" />
        ))}
      </div>
    </div>
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Experience</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
          Leadership & Growth
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-border" />

        <div className="space-y-12 md:space-y-0">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className={`relative md:flex md:items-center md:mb-16 ${isLeft ? "" : "md:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="text-xs font-semibold text-primary tracking-widest uppercase">{exp.period}</span>
                    <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{exp.org}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">{exp.desc}</p>
                  </div>
                  {/* Dot */}
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

export default ExperienceSection;
