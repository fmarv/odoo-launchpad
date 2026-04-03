import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24" id="contact">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center p-12 md:p-16 rounded-2xl border border-border bg-card glow-box relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-hero opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Ready to Deploy <span className="gradient-text">Odoo 17</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              Let's discuss your ERP needs and build a deployment plan tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8 py-6 font-semibold gap-2 group">
                <Mail className="w-4 h-4" />
                Contact Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
