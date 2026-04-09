/**
 * Continuous undulating wave pattern across the entire site.
 * Fixed layer at z-index -10, very low opacity for elegance.
 */
const GlobalBackground = () => (
  <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
    {/* Base background color */}
    <div className="absolute inset-0 bg-background" />

    {/* Continuous SVG wave pattern */}
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.06]"
      preserveAspectRatio="none"
      viewBox="0 0 1440 4000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wave layer 1 — wide undulation */}
      <path
        d="M0 200 C360 100, 720 350, 1440 200 C1440 200, 1440 600, 1440 600 C720 750, 360 500, 0 600 Z"
        fill="hsl(var(--primary))"
        opacity="0.5"
      />
      <path
        d="M0 700 C480 550, 960 900, 1440 700 C1440 700, 1440 1100, 1440 1100 C960 1300, 480 950, 0 1100 Z"
        fill="hsl(var(--surface-warm))"
        opacity="0.6"
      />
      <path
        d="M0 1200 C300 1050, 600 1350, 900 1200 C1200 1050, 1440 1350, 1440 1200 L1440 1600 C1440 1750, 1200 1450, 900 1600 C600 1750, 300 1450, 0 1600 Z"
        fill="hsl(var(--green-glow))"
        opacity="0.35"
      />
      <path
        d="M0 1700 C360 1550, 720 1850, 1080 1700 C1260 1625, 1440 1750, 1440 1700 L1440 2100 C1440 2250, 1080 2000, 720 2100 C360 2200, 0 1950, 0 2100 Z"
        fill="hsl(var(--primary))"
        opacity="0.4"
      />
      <path
        d="M0 2200 C480 2050, 960 2400, 1440 2200 L1440 2600 C960 2800, 480 2450, 0 2600 Z"
        fill="hsl(var(--surface-warm))"
        opacity="0.5"
      />
      <path
        d="M0 2700 C300 2550, 900 2900, 1440 2700 L1440 3100 C900 3300, 300 2950, 0 3100 Z"
        fill="hsl(var(--green-glow))"
        opacity="0.3"
      />
      <path
        d="M0 3200 C600 3050, 1000 3400, 1440 3200 L1440 3600 C1000 3800, 600 3450, 0 3600 Z"
        fill="hsl(var(--primary))"
        opacity="0.35"
      />
    </svg>

    {/* Soft gradient overlay for depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />
  </div>
);

export default GlobalBackground;
