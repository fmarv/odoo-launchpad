import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", description: "We analyze your business needs, existing systems, and deployment requirements." },
  { num: "02", title: "Planning", description: "Custom deployment roadmap with timelines, module selection, and resource allocation." },
  { num: "03", title: "Provisioning", description: "Odoo 17 installed, configured, and optimized across all your devices and infrastructure." },
  { num: "04", title: "Ongoing Support", description: "Continuous monitoring, updates, and dedicated support to keep everything running smoothly." },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-secondary/30" id="process">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-3">How We Work</h2>
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
              <h3 className="text-xl font-semibold font-display mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
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
