import { motion } from "framer-motion";

/**
 * A single, fixed full-page background layer with soft organic blobs.
 * Sits behind every section so transitions feel seamless.
 */
const GlobalBackground = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    {/* ── Large warm base wash ── */}
    <div className="absolute inset-0 bg-background" />

    {/* ── Blob 1 — top-right, soft green ── */}
    <motion.div
      className="absolute -top-[15%] -right-[10%] w-[55vw] h-[55vw] max-w-[900px] max-h-[900px] rounded-full bg-[hsl(var(--green-glow))] opacity-[0.045] blur-[160px]"
      animate={{
        x: [0, 30, 0],
        y: [0, 20, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* ── Blob 2 — center-left, primary green ── */}
    <motion.div
      className="absolute top-[25%] -left-[8%] w-[45vw] h-[45vw] max-w-[750px] max-h-[750px] rounded-full bg-primary opacity-[0.035] blur-[140px]"
      animate={{
        x: [0, -20, 0],
        y: [0, 30, 0],
        scale: [1, 1.06, 1],
      }}
      transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 4 }}
    />

    {/* ── Blob 3 — middle-right, warm beige ── */}
    <motion.div
      className="absolute top-[45%] right-[5%] w-[40vw] h-[40vw] max-w-[650px] max-h-[650px] rounded-full bg-[hsl(var(--surface-warm))] opacity-[0.06] blur-[130px]"
      animate={{
        x: [0, 15, 0],
        y: [0, -25, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />

    {/* ── Blob 4 — lower-left, faint green glow ── */}
    <motion.div
      className="absolute top-[65%] -left-[5%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-[hsl(var(--green-glow))] opacity-[0.03] blur-[150px]"
      animate={{
        x: [0, 25, 0],
        y: [0, -15, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 6 }}
    />

    {/* ── Blob 5 — bottom-right, primary ── */}
    <motion.div
      className="absolute top-[80%] right-[10%] w-[35vw] h-[35vw] max-w-[600px] max-h-[600px] rounded-full bg-primary opacity-[0.04] blur-[120px]"
      animate={{
        x: [0, -18, 0],
        y: [0, 20, 0],
        scale: [1, 1.07, 1],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 8 }}
    />

    {/* ── Very subtle noise-like texture overlay ── */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/50" />
  </div>
);

export default GlobalBackground;
