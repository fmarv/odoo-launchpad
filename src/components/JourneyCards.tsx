import { motion } from "framer-motion";
import { ArrowRight, Settings, Tag, HelpCircle, MessageSquare, Sparkles } from "lucide-react";
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
      step: 1,
      featured: true,
    },
    {
      icon: Tag,
      titleKey: "journey.pricing.title",
      descKey: "journey.pricing.desc",
      ctaKey: "journey.pricing.cta",
      path: "/preise",
      step: 2,
      featured: false,
    },
    {
      icon: HelpCircle,
      titleKey: "journey.why.title",
      descKey: "journey.why.desc",
      ctaKey: "journey.why.cta",
      path: "/warum-erp",
      step: 3,
      featured: false,
    },
    {
      icon: MessageSquare,
      titleKey: "journey.contact.title",
      descKey: "journey.contact.desc",
      ctaKey: "journey.contact.cta",
      path: "/kontakt",
      step: 4,
      featured: false,
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

        {/* Flow connector line - desktop only */}
        <div className="hidden lg:block max-w-5xl mx-auto relative mb-8">
          <div className="absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />
          <div className="flex justify-between px-[10%]">
            {cards.map((card, i) => (
              <motion.div
                key={card.step}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 300 }}
                className="flex flex-col items-center"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold font-display ${
                  card.featured
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-secondary border border-border text-muted-foreground"
                }`}>
                  {String(card.step).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`group relative rounded-2xl border p-8 transition-all duration-300 cursor-pointer overflow-hidden ${
                card.featured
                  ? "border-primary/50 bg-card glow-box md:col-span-2"
                  : "border-border bg-card hover:border-primary/30 hover:glow-box"
              }`}
              onClick={() => navigate(card.path)}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Featured badge */}
              {card.featured && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full"
                >
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span className="text-xs font-semibold text-primary">{t("journey.featured")}</span>
                </motion.div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                {/* Step number + icon row */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="lg:hidden w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-sm font-bold font-display text-muted-foreground">
                    {String(card.step).padStart(2, "0")}
                  </div>
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                      card.featured
                        ? "bg-primary/20"
                        : "bg-primary/10 group-hover:bg-primary/20"
                    }`}
                  >
                    <card.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                </div>

                <h3 className={`font-bold font-display mb-3 ${
                  card.featured ? "text-2xl md:text-3xl" : "text-2xl"
                }`}>
                  {t(card.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{t(card.descKey)}</p>
                <div>
                  <Button
                    variant={card.featured ? "default" : "outline"}
                    className="gap-2 group/btn font-semibold"
                  >
                    {t(card.ctaKey)}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyCards;
