import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, Phone, User, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: t("cta.fillFields"), variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: t("cta.sent"), description: t("cta.sentDesc") });
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <section className="py-24" id="contact">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              {t("cta.title1")} <span className="gradient-text">Odoo 17</span>{t("cta.title2")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">{t("cta.subtitle")}</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 md:p-12 glow-box relative overflow-hidden">
            <div className="absolute inset-0 gradient-hero opacity-30" />
            <form onSubmit={handleSubmit} className="relative z-10 grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" /> {t("cta.name")} <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder={t("cta.namePlaceholder")}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="bg-background/50 border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" /> {t("cta.email")} <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="bg-background/50 border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" /> {t("cta.phone")}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+49 (0) 123 456789"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  maxLength={20}
                  className="bg-background/50 border-border"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <Label htmlFor="message" className="text-foreground flex items-center gap-2">
                  <Send className="w-4 h-4 text-primary" /> {t("cta.message")} <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder={t("cta.messagePlaceholder")}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  rows={5}
                  className="bg-background/50 border-border resize-none"
                />
              </div>

              <div className="md:col-span-2 flex justify-center pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="text-base px-10 py-6 font-semibold gap-2 group"
                >
                  {isSubmitting ? t("cta.sending") : t("cta.submit")}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
