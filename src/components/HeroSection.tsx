import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, ShoppingCart, Package, FileText, BarChart3, Users, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const FloatingCard = ({
  icon: Icon,
  label,
  delay,
  className,
}: {
  icon: React.ElementType;
  label: string;
  delay: number;
  className: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
    className={`absolute ${className}`}
  >
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/80 border border-border/60 backdrop-blur-sm shadow-lg"
    >
      <Icon className="w-4 h-4 text-primary" />
      <span className="text-xs font-medium text-foreground/80">{label}</span>
    </motion.div>
  </motion.div>
);

const DashboardMockup = () => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative max-w-2xl mx-auto mt-16"
    >
      {/* Floating cards */}
      <FloatingCard icon={ShoppingCart} label="Einkauf" delay={0.6} className="-top-4 -left-8 md:left-4" />
      <FloatingCard icon={Package} label="Lager" delay={0.8} className="-top-4 -right-8 md:right-4" />
      <FloatingCard icon={FileText} label="Rechnungen" delay={1.0} className="top-16 -left-12 md:-left-4" />
      <FloatingCard icon={Users} label="HR" delay={1.2} className="top-16 -right-12 md:-right-4" />

      {/* Dashboard frame */}
      <div className="rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl">
        {/* Window bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40 bg-secondary/30">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
          <span className="ml-3 text-xs text-muted-foreground font-mono">odoo17.ralphun.local</span>
        </div>

        {/* Dashboard content */}
        <div className="p-6 space-y-4">
          {/* Top stats row */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "Aufträge", value: "127", icon: FileText, change: "+12%" },
              { label: "Umsatz", value: "€48.2k", icon: BarChart3, change: "+8%" },
              { label: "Lager", value: "1.842", icon: Package, change: "98%" },
              { label: "Kunden", value: "89", icon: Users, change: "+5" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="p-3 rounded-lg bg-secondary/40 border border-border/30"
              >
                <div className="flex items-center justify-between mb-1">
                  <stat.icon className="w-3.5 h-3.5 text-primary/70" />
                  <span className="text-[10px] text-green-400 font-medium">{stat.change}</span>
                </div>
                <div className="text-lg font-bold font-display text-foreground">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Chart placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="h-24 rounded-lg bg-secondary/30 border border-border/20 flex items-end px-4 pb-3 gap-1"
          >
            {[35, 55, 40, 70, 60, 85, 75, 90, 65, 80, 95, 72].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 1.3 + i * 0.05, duration: 0.4, ease: "easeOut" }}
                className="flex-1 rounded-sm bg-primary/40"
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Glow effect behind */}
      <div className="absolute inset-0 -z-10 rounded-xl bg-primary/5 blur-3xl scale-110" />
    </motion.div>
  );
};

const HeroSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <span className="text-sm text-muted-foreground font-medium">{t("hero.badge")}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6 leading-[1.1]">
            {t("hero.title1")} <span className="gradient-text">Excel-Chaos.</span> {t("hero.title2")}
            <br />{t("hero.title3")}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 py-6 font-semibold gap-2 group" onClick={() => navigate("/kontakt")}>
              {t("hero.cta1")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6 font-semibold" onClick={() => navigate("/leistungen")}>
              <Shield className="w-4 h-4 mr-2" />
              {t("hero.cta2")}
            </Button>
          </div>
        </motion.div>

        {/* Dashboard Mockup */}
        <DashboardMockup />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16"
        >
          {[
            { value: "200+", label: t("hero.stat.deployments") },
            { value: "99.9%", label: t("hero.stat.uptime") },
            { value: "24/7", label: t("hero.stat.support") },
            { value: "<2h", label: t("hero.stat.response") },
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
