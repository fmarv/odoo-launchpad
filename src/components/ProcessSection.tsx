import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    { num: "01", titleKey: "process.s1.title", descKey: "process.s1.desc" },
    { num: "02", titleKey: "process.s2.title", descKey: "process.s2.desc" },
    { num: "03", titleKey: "process.s3.title", descKey: "process.s3.desc" },
    { num: "04", titleKey: "process.s4.title", descKey: "process.s4.desc" },
  ];

  return (
    <section className="py-24 bg-secondary/30" id="process">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">{t("process.label")}</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-3">{t("process.title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="text-6xl font-bold font-display text-primary/10 mb-4">{step.num}</div>
              <h3 className="text-xl font-semibold font-display mb-2">{t(step.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(step.descKey)}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
