import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">Odoo 17 Certified Partner</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6 leading-[1.1]">
            Deploy <span className="gradient-text">Odoo 17 ERP</span> with
            <br />Zero Downtime
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We provision, configure, and support Odoo 17 across all your devices — from first install to ongoing operations. End-to-end, hassle-free.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 py-6 font-semibold gap-2 group">
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6 font-semibold">
              <Shield className="w-4 h-4 mr-2" />
              See Our Process
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-20"
        >
          {[
            { value: "200+", label: "Deployments" },
            { value: "99.9%", label: "Uptime" },
            { value: "24/7", label: "Support" },
            { value: "<2h", label: "Response Time" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-display text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
