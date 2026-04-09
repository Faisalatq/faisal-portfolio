import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">{t.contact.badge}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t.contact.title}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">{t.contact.desc}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 bg-background/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-border text-left"
          >
            <Input name="name" placeholder={t.contact.form.name} value={form.name} onChange={handleChange} className="bg-background" />
            <Input name="email" placeholder={t.contact.form.email} type="email" value={form.email} onChange={handleChange} className="bg-background" />
            <Textarea name="message" placeholder={t.contact.form.message} rows={5} value={form.message} onChange={handleChange} className="bg-background resize-none" />
            <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto">
              <Send size={18} />
              {t.contact.form.send}
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
