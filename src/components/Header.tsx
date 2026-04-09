import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { smoothScrollTo } from "@/lib/smoothScroll";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleNav = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    if (id) {
      smoothScrollTo(id);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={(e) => handleNav(e, "#")}
          className="text-2xl font-bold text-foreground tracking-tight font-sans"
        >
          فيصل
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors duration-200"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { handleNav(e, item.href); setOpen(false); }}
                  className="text-base font-medium text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
