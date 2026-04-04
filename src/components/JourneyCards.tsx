import { motion } from "framer-motion";
import { ArrowRight, Settings, Tag, HelpCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const JourneyCards = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const cards = [
    {
      icon: Settings,
      titleKey: "journey.services.title",
      descKey: "journey.services.desc",
      ctaKey: "journey.services.cta",
      path: "/leistungen",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Tag,
      titleKey: "journey.pricing.title",
      descKey: "journey.pricing.desc",
      ctaKey: "journey.pricing.cta",
      path: "/preise",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: HelpCircle,
      titleKey: "journey.why.title",
      descKey: "journey.why.desc",
      ctaKey: "journey.why.cta",
      path: "/warum-erp",
      gradient: "from-primary/15 to-accent/10",
    },
    {
      icon: MessageSquare,
      titleKey: "journey.contact.title",
      descKey: "journey.contact.desc",
      ctaKey: "journey.contact.cta",
      path: "/kontakt",
      gradient: "from-accent/15 to-primary/10",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            {t("journey.label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-3">
            {t("journey.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-all duration-300 hover:glow-box cursor-pointer overflow-hidden"
              onClick={() => navigate(card.path)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-3">{t(card.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{t(card.descKey)}</p>
                <Button variant="outline" className="gap-2 group/btn font-semibold">
                  {t(card.ctaKey)}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyCards;
