import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Linkedin, Github, Twitter } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import AnimatedBackground from "./AnimatedBackground";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <AnimatedBackground variant="contact" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">{t.contact.badge}</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.contact.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">{t.contact.desc}</p>

            <div className="space-y-4 mb-10">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{t.contact.email}</span> faisal@example.com
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 bg-card p-8 md:p-10 rounded-2xl border border-border"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Input name="name" placeholder={t.contact.form.name} value={form.name} onChange={handleChange} className="bg-background" />
                <Input name="email" placeholder={t.contact.form.email} type="email" value={form.email} onChange={handleChange} className="bg-background" />
              </div>
              <Input name="subject" placeholder={t.contact.form.subject} value={form.subject} onChange={handleChange} className="bg-background" />
              <Textarea name="message" placeholder={t.contact.form.message} rows={5} value={form.message} onChange={handleChange} className="bg-background resize-none" />
              <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto">
                <Send size={18} />
                {t.contact.form.send}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
