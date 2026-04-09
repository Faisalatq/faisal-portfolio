import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import AnimatedBackground from "./AnimatedBackground";
import CVIcon from "./CVIcon";
import { smoothScrollTo } from "@/lib/smoothScroll";

const HeroSection = () => {
  const { t } = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
  };

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      <AnimatedBackground variant="hero" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl flex-1"
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
                <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
                  <ArrowDown size={18} />
                  {t.hero.cta1}
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#resume" onClick={(e) => handleScroll(e, "resume")}>
                  <CVIcon size={18} />
                  {t.hero.cta2}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Headshot placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 hidden lg:block"
          >
            <div className="w-72 h-80 rounded-2xl bg-muted/60 border border-border/60 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted/80" />
              <div className="text-muted-foreground/40 flex flex-col items-center gap-2">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
                <span className="text-xs font-medium tracking-wide uppercase">Photo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
