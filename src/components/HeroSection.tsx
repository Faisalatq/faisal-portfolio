import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
    {/* Subtle decorative circle */}
    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6">
          Hi, I'm{" "}
          <span className="text-gradient-green">Faisal</span>.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
          A Computer Science professional leveraging technical expertise for consulting, complex problem-solving, and strategic project management.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#projects">
              <ArrowDown size={18} />
              View My Work
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#resume">
              <Download size={18} />
              Download CV
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
