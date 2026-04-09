import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Linkedin, Github, Twitter } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute -top-10 -right-32 w-[500px] h-[500px] opacity-[0.04]" viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="220" stroke="hsl(var(--primary))" strokeWidth="1" />
          <circle cx="250" cy="250" r="160" stroke="hsl(var(--green-glow))" strokeWidth="0.75" />
          <circle cx="250" cy="250" r="100" stroke="hsl(var(--primary))" strokeWidth="0.5" />
        </svg>
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/[0.03] blur-[80px]" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <ScrollReveal>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              Have a project in mind or just want to connect? Drop me a message and I'll get back to you.
            </p>

            <div className="space-y-4 mb-10">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Email:</span> faisal@example.com
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

          {/* Right — Form */}
          <ScrollReveal delay={0.15}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5 bg-card p-8 md:p-10 rounded-2xl border border-border"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="bg-background" />
                <Input name="email" placeholder="Your Email" type="email" value={form.email} onChange={handleChange} className="bg-background" />
              </div>
              <Input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} className="bg-background" />
              <Textarea name="message" placeholder="Your Message" rows={5} value={form.message} onChange={handleChange} className="bg-background resize-none" />
              <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
