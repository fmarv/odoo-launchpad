import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const Preise = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const plans = [
    {
      nameKey: "pricing.plan1.name",
      priceKey: "pricing.plan1.price",
      descKey: "pricing.plan1.desc",
      features: ["pricing.plan1.f1", "pricing.plan1.f2", "pricing.plan1.f3"],
      popular: false,
    },
    {
      nameKey: "pricing.plan2.name",
      priceKey: "pricing.plan2.price",
      descKey: "pricing.plan2.desc",
      features: ["pricing.plan2.f1", "pricing.plan2.f2", "pricing.plan2.f3"],
      popular: true,
    },
    {
      nameKey: "pricing.plan3.name",
      priceKey: "pricing.plan3.price",
      descKey: "pricing.plan3.desc",
      features: ["pricing.plan3.f1", "pricing.plan3.f2", "pricing.plan3.f3"],
      popular: false,
    },
  ];

  return (
    <PageLayout>
      <section className="py-24">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              {t("pricing.label")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mt-3 mb-4">
              {t("pricing.title")}
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              {t("pricing.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.nameKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`relative rounded-2xl border p-8 ${
                  plan.popular
                    ? "border-primary bg-card glow-box"
                    : "border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    <Star className="w-3 h-3" /> {t("pricing.popular")}
                  </div>
                )}
                <h3 className="text-xl font-bold font-display mb-2">{t(plan.nameKey)}</h3>
                <div className="text-3xl font-bold font-display text-foreground mb-1">
                  {t(plan.priceKey)}
                </div>
                <p className="text-muted-foreground text-sm mb-6">{t(plan.descKey)}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((fKey) => (
                    <li key={fKey} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {t(fKey)}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full font-semibold gap-2 group"
                  onClick={() => navigate("/kontakt")}
                >
                  {t("pricing.cta")}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Preise;
