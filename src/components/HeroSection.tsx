import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Layered decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute -top-32 -right-48 w-[900px] h-[900px] opacity-[0.07]" viewBox="0 0 900 900" fill="none">
          <circle cx="600" cy="300" r="400" stroke="hsl(var(--primary))" strokeWidth="1.5" />
          <circle cx="600" cy="300" r="300" stroke="hsl(var(--primary))" strokeWidth="1" />
          <circle cx="600" cy="300" r="200" stroke="hsl(var(--green-glow))" strokeWidth="0.75" />
        </svg>
        <svg className="absolute -bottom-40 -left-32 w-[700px] h-[700px] opacity-[0.05]" viewBox="0 0 700 700" fill="none">
          <path d="M350 80C480 80 620 160 620 350C620 540 500 620 350 620C200 620 80 520 80 350C80 180 220 80 350 80Z" fill="hsl(var(--primary))" />
        </svg>
        <svg className="absolute top-1/3 left-0 w-full h-[400px] opacity-[0.04]" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
          <path d="M0 200C240 100 480 300 720 200C960 100 1200 300 1440 200V400H0Z" fill="hsl(var(--primary))" />
          <path d="M0 250C200 150 400 350 600 250C800 150 1000 350 1200 250C1300 200 1400 280 1440 250V400H0Z" fill="hsl(var(--green-glow))" />
        </svg>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-green-glow/5 blur-[100px]" />
        <div className="absolute top-20 right-20 grid grid-cols-5 gap-4 opacity-[0.08]">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            {t.hero.badge}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6">
            {t.hero.headline}{" "}
            <span className="text-gradient-green">{t.hero.name}</span>.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            {t.hero.subheadline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">
                <ArrowDown size={18} />
                {t.hero.cta1}
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#resume">
                <Download size={18} />
                {t.hero.cta2}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
