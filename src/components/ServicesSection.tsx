import { motion } from "framer-motion";
import { Monitor, Settings, Headphones, RefreshCw, Database, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Device Provisioning",
    description: "Complete Odoo 17 installation and configuration on all your hardware — desktops, tablets, POS terminals, and more.",
  },
  {
    icon: Settings,
    title: "Custom Configuration",
    description: "Tailored modules, workflows, and integrations designed around your unique business processes.",
  },
  {
    icon: Database,
    title: "Data Migration",
    description: "Seamless migration from legacy systems with zero data loss. We handle the complexity so you don't have to.",
  },
  {
    icon: RefreshCw,
    title: "Updates & Patches",
    description: "Regular system updates, security patches, and module upgrades to keep your ERP running at peak performance.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support with dedicated account managers and guaranteed response times.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description: "Enterprise-grade security configurations, backups, and compliance auditing built into every deployment.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative" id="services">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-3">End-to-End ERP Services</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 text-lg">
            From initial provisioning to long-term support, we cover every step of your Odoo 17 journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-box"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-display mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
