import ScrollReveal from "./ScrollReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "ProPlay Hub",
    desc: "An eSports platform concept designed to connect gamers, teams, and tournaments in one unified ecosystem.",
    tags: ["React", "Node.js", "UI/UX"],
    color: "from-primary/20 to-green-glow/10",
  },
  {
    title: "KSU CROWN",
    desc: "Full-scale eSports tournament organization — branding, logistics, live production, and participant management.",
    tags: ["Project Mgmt", "Branding", "Operations"],
    color: "from-foreground/5 to-foreground/10",
  },
  {
    title: "Tuwaiq Car Rental",
    desc: "A comprehensive system case study analyzing car rental workflows, database design, and user experience.",
    tags: ["Case Study", "SQL", "Systems Design"],
    color: "from-primary/10 to-primary/5",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Portfolio</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">Featured Projects</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.12}>
            <div className="group relative bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Image placeholder */}
              <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <span className="text-4xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors select-none">
                  {p.title.charAt(0)}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
