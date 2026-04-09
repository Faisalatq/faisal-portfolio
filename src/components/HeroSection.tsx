import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import AnimatedBackground from "./AnimatedBackground";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      <AnimatedBackground variant="hero" />

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
