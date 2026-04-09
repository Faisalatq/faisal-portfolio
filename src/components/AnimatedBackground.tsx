import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

type Props = {
  variant?: "hero" | "about" | "experience" | "projects" | "resume" | "contact";
};

const AnimatedBackground = ({ variant = "hero" }: Props) => {
  const { isRtl } = useLanguage();
  const dir = isRtl ? -1 : 1;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Smooth directional transition wrapper */}
      <motion.div
        className="absolute inset-0"
        animate={{ scaleX: dir }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0.5 }}
      >
        {variant === "hero" && <HeroBg />}
        {variant === "about" && <AboutBg />}
        {variant === "experience" && <ExperienceBg />}
        {variant === "projects" && <ProjectsBg />}
        {variant === "resume" && <ResumeBg />}
        {variant === "contact" && <ContactBg />}
      </motion.div>

      {/* Non-directional ambient animations (don't flip) */}
      <AmbientGlow variant={variant} />
    </div>
  );
};

/* ── Ambient pulsing/breathing glow shared across sections ── */
const AmbientGlow = ({ variant }: { variant: string }) => {
  const positions: Record<string, string> = {
    hero: "top-1/3 left-1/2 -translate-x-1/2",
    about: "bottom-10 right-1/4",
    experience: "top-1/2 left-1/3",
    projects: "bottom-20 left-1/4",
    resume: "top-1/3 right-1/3",
    contact: "bottom-10 left-1/2 -translate-x-1/2",
  };

  return (
    <>
      <motion.div
        className={`absolute ${positions[variant] || "top-1/2 left-1/2"} w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[120px]`}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.04, 0.07, 0.04],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute ${variant === "hero" ? "bottom-20 right-1/4" : "top-20 left-1/4"} w-[350px] h-[350px] rounded-full bg-green-glow/[0.03] blur-[100px]`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </>
  );
};

/* ── Hero ── */
const HeroBg = () => (
  <>
    <motion.svg
      className="absolute -top-32 -right-48 w-[900px] h-[900px] opacity-[0.07]"
      viewBox="0 0 900 900"
      fill="none"
      animate={{ rotate: [0, 8, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="600" cy="300" r="400" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <circle cx="600" cy="300" r="300" stroke="hsl(var(--primary))" strokeWidth="1" />
      <circle cx="600" cy="300" r="200" stroke="hsl(var(--green-glow))" strokeWidth="0.75" />
    </motion.svg>

    <motion.svg
      className="absolute -bottom-40 -left-32 w-[700px] h-[700px] opacity-[0.05]"
      viewBox="0 0 700 700"
      fill="none"
      animate={{ y: [0, -20, 0], scale: [1, 1.03, 1] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M350 80C480 80 620 160 620 350C620 540 500 620 350 620C200 620 80 520 80 350C80 180 220 80 350 80Z" fill="hsl(var(--primary))" />
    </motion.svg>

    <svg className="absolute top-1/3 left-0 w-full h-[400px] opacity-[0.04]" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
      <path d="M0 200C240 100 480 300 720 200C960 100 1200 300 1440 200V400H0Z" fill="hsl(var(--primary))" />
      <path d="M0 250C200 150 400 350 600 250C800 150 1000 350 1200 250C1300 200 1400 280 1440 250V400H0Z" fill="hsl(var(--green-glow))" />
    </svg>

    <motion.div
      className="absolute top-20 right-20 grid grid-cols-5 gap-4 opacity-[0.08]"
      animate={{ opacity: [0.08, 0.04, 0.08] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {Array.from({ length: 25 }).map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
      ))}
    </motion.div>
  </>
);

/* ── About ── */
const AboutBg = () => (
  <>
    <motion.svg
      className="absolute -top-20 -left-40 w-[600px] h-[600px] opacity-[0.04]"
      viewBox="0 0 600 600"
      fill="none"
      animate={{ rotate: [0, -6, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M300 50Q500 150 500 300Q500 500 300 550Q100 500 100 300Q100 150 300 50Z" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <path d="M300 100Q450 180 450 300Q450 450 300 500Q150 450 150 300Q150 180 300 100Z" stroke="hsl(var(--green-glow))" strokeWidth="1" />
    </motion.svg>

    <motion.div
      className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-primary/[0.03] blur-[80px]"
      animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  </>
);

/* ── Experience ── */
const ExperienceBg = () => (
  <>
    <motion.svg
      className="absolute top-10 right-0 w-full h-[300px] opacity-[0.03]"
      viewBox="0 0 1440 300"
      fill="none"
      preserveAspectRatio="none"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M0 150C360 50 720 250 1080 150C1260 100 1380 180 1440 150V300H0Z" fill="hsl(var(--primary))" />
    </motion.svg>

    <motion.svg
      className="absolute -bottom-10 -left-20 w-[400px] h-[400px] opacity-[0.05]"
      viewBox="0 0 400 400"
      fill="none"
      animate={{ rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="200" cy="200" r="180" stroke="hsl(var(--green-glow))" strokeWidth="1" />
      <circle cx="200" cy="200" r="120" stroke="hsl(var(--primary))" strokeWidth="0.75" />
    </motion.svg>

    <motion.div
      className="absolute top-1/3 right-10 grid grid-cols-4 gap-3 opacity-[0.06]"
      animate={{ opacity: [0.06, 0.02, 0.06] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className="w-1 h-1 rounded-full bg-primary" />
      ))}
    </motion.div>
  </>
);

/* ── Projects ── */
const ProjectsBg = () => (
  <>
    <motion.svg
      className="absolute -top-16 right-1/4 w-[500px] h-[500px] opacity-[0.04]"
      viewBox="0 0 500 500"
      fill="none"
      animate={{ rotate: [0, 5, 0] }}
      transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x="50" y="50" width="400" height="400" rx="80" stroke="hsl(var(--primary))" strokeWidth="1" />
      <rect x="100" y="100" width="300" height="300" rx="60" stroke="hsl(var(--green-glow))" strokeWidth="0.75" />
    </motion.svg>

    <motion.div
      className="absolute bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-green-glow/[0.03] blur-[90px]"
      animate={{ x: [0, 20, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />

    <svg className="absolute bottom-0 left-0 w-full h-[200px] opacity-[0.03]" viewBox="0 0 1440 200" fill="none" preserveAspectRatio="none">
      <path d="M0 100C480 0 960 200 1440 100V200H0Z" fill="hsl(var(--primary))" />
    </svg>
  </>
);

/* ── Resume ── */
const ResumeBg = () => (
  <>
    <motion.svg
      className="absolute top-0 left-0 w-full h-full opacity-[0.06]"
      viewBox="0 0 1440 600"
      fill="none"
      preserveAspectRatio="none"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M0 300C200 200 400 400 600 300C800 200 1000 400 1200 300C1320 250 1400 350 1440 300" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" />
      <path d="M0 350C240 250 480 450 720 350C960 250 1200 450 1440 350" stroke="hsl(var(--green-glow))" strokeWidth="0.5" fill="none" />
    </motion.svg>

    <motion.div
      className="absolute -top-20 right-1/3 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px]"
      animate={{ scale: [1, 1.1, 1], x: [0, -15, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />
  </>
);

/* ── Contact ── */
const ContactBg = () => (
  <>
    <motion.svg
      className="absolute -top-10 -right-32 w-[500px] h-[500px] opacity-[0.04]"
      viewBox="0 0 500 500"
      fill="none"
      animate={{ rotate: [0, -8, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="250" cy="250" r="220" stroke="hsl(var(--primary))" strokeWidth="1" />
      <circle cx="250" cy="250" r="160" stroke="hsl(var(--green-glow))" strokeWidth="0.75" />
      <circle cx="250" cy="250" r="100" stroke="hsl(var(--primary))" strokeWidth="0.5" />
    </motion.svg>

    <motion.div
      className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/[0.03] blur-[80px]"
      animate={{ y: [0, -12, 0], x: [0, 10, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
  </>
);

export default AnimatedBackground;
