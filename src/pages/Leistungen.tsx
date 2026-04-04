import { motion } from "framer-motion";
import { Monitor, Settings, Database, RefreshCw, Headphones, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const Leistungen = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services = [
    { icon: Monitor, titleKey: "services.s1.title", descKey: "services.s1.desc" },
    { icon: Settings, titleKey: "services.s2.title", descKey: "services.s2.desc" },
    { icon: Database, titleKey: "services.s3.title", descKey: "services.s3.desc" },
    { icon: RefreshCw, titleKey: "services.s4.title", descKey: "services.s4.desc" },
    { icon: Headphones, titleKey: "services.s5.title", descKey: "services.s5.desc" },
    { icon: ShieldCheck, titleKey: "services.s6.title", descKey: "services.s6.desc" },
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
              {t("services.label")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mt-3 mb-4">
              {t("services.title")}
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              {t("services.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.titleKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-box"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-display mb-3">{t(service.titleKey)}</h3>
                <p className="text-muted-foreground leading-relaxed">{t(service.descKey)}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <Button size="lg" className="font-semibold gap-2 group" onClick={() => navigate("/kontakt")}>
              {t("hero.cta1")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Leistungen;
