import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, TrendingUp, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const WarumERP = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const painPoints = [
    "why.pain1", "why.pain2", "why.pain3", "why.pain4",
    "why.pain5", "why.pain6",
  ];

  const stats = [
    { value: "52%", labelKey: "why.stat1" },
    { value: "20-30%", labelKey: "why.stat2" },
    { value: "50%", labelKey: "why.stat3" },
    { value: "2,5 J.", labelKey: "why.stat4" },
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
              {t("why.label")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mt-3 mb-4">
              {t("why.title")}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("why.subtitle")}
            </p>
          </motion.div>

          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mb-20"
          >
            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold font-display">{t("why.painTitle")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {painPoints.map((key, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{t(key)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto mb-20"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold font-display">{t("why.statsTitle")}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.labelKey} className="text-center p-6 rounded-xl bg-card border border-border">
                  <div className="text-3xl font-bold font-display text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{t(stat.labelKey)}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">{t("why.ctaHint")}</span>
            </div>
            <div>
              <Button size="lg" className="font-semibold gap-2 group" onClick={() => navigate("/kontakt")}>
                {t("why.cta")}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default WarumERP;
