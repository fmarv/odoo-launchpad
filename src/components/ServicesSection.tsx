import { motion } from "framer-motion";
import { Monitor, Settings, Headphones, RefreshCw, Database, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Monitor, titleKey: "services.s1.title", descKey: "services.s1.desc" },
    { icon: Settings, titleKey: "services.s2.title", descKey: "services.s2.desc" },
    { icon: Database, titleKey: "services.s3.title", descKey: "services.s3.desc" },
    { icon: RefreshCw, titleKey: "services.s4.title", descKey: "services.s4.desc" },
    { icon: Headphones, titleKey: "services.s5.title", descKey: "services.s5.desc" },
    { icon: ShieldCheck, titleKey: "services.s6.title", descKey: "services.s6.desc" },
  ];

  return (
    <section className="py-24 relative" id="services">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">{t("services.label")}</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-3">{t("services.title")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 text-lg">{t("services.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
      </div>
    </section>
  );
};

export default ServicesSection;
