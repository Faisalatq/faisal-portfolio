export const smoothScrollTo = (targetId: string) => {
  const el = document.getElementById(targetId);
  if (!el) return;

  const headerHeight = document.querySelector("header")?.offsetHeight ?? 72;
  const targetPosition = el.getBoundingClientRect().top + window.scrollY - headerHeight;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = Math.min(1200, Math.max(600, Math.abs(distance) * 0.5));
  let startTime: number | null = null;

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};
