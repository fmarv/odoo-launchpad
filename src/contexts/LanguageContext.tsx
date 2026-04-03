import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.services": { en: "Services", de: "Leistungen" },
  "nav.process": { en: "Process", de: "Ablauf" },
  "nav.contact": { en: "Contact", de: "Kontakt" },
  "nav.getStarted": { en: "Get Started", de: "Loslegen" },

  // Hero
  "hero.badge": { en: "Odoo 17 Certified Partner", de: "Odoo 17 Zertifizierter Partner" },
  "hero.title1": { en: "Deploy", de: "Deployen Sie" },
  "hero.title2": { en: "with", de: "mit" },
  "hero.title3": { en: "Zero Downtime", de: "Null Ausfallzeit" },
  "hero.subtitle": {
    en: "We provision, configure, and support Odoo 17 across all your devices — from first install to ongoing operations. End-to-end, hassle-free.",
    de: "Wir installieren, konfigurieren und betreuen Odoo 17 auf all Ihren Geräten — von der Erstinstallation bis zum laufenden Betrieb. Rundum sorglos.",
  },
  "hero.cta1": { en: "Get Started", de: "Loslegen" },
  "hero.cta2": { en: "See Our Process", de: "Unser Ablauf" },
  "hero.stat.deployments": { en: "Deployments", de: "Deployments" },
  "hero.stat.uptime": { en: "Uptime", de: "Verfügbarkeit" },
  "hero.stat.support": { en: "Support", de: "Support" },
  "hero.stat.response": { en: "Response Time", de: "Reaktionszeit" },

  // Services
  "services.label": { en: "What We Do", de: "Was wir tun" },
  "services.title": { en: "End-to-End ERP Services", de: "Ganzheitliche ERP-Dienstleistungen" },
  "services.subtitle": {
    en: "From initial provisioning to long-term support, we cover every step of your Odoo 17 journey.",
    de: "Von der Ersteinrichtung bis zum Langzeit-Support begleiten wir jeden Schritt Ihrer Odoo 17 Reise.",
  },
  "services.s1.title": { en: "Device Provisioning", de: "Geräte-Provisionierung" },
  "services.s1.desc": {
    en: "Complete Odoo 17 installation and configuration on all your hardware — desktops, tablets, POS terminals, and more.",
    de: "Komplette Odoo 17 Installation und Konfiguration auf all Ihrer Hardware — Desktops, Tablets, POS-Terminals und mehr.",
  },
  "services.s2.title": { en: "Custom Configuration", de: "Individuelle Konfiguration" },
  "services.s2.desc": {
    en: "Tailored modules, workflows, and integrations designed around your unique business processes.",
    de: "Maßgeschneiderte Module, Workflows und Integrationen, die auf Ihre Geschäftsprozesse abgestimmt sind.",
  },
  "services.s3.title": { en: "Data Migration", de: "Datenmigration" },
  "services.s3.desc": {
    en: "Seamless migration from legacy systems with zero data loss. We handle the complexity so you don't have to.",
    de: "Nahtlose Migration von Altsystemen ohne Datenverlust. Wir übernehmen die Komplexität für Sie.",
  },
  "services.s4.title": { en: "Updates & Patches", de: "Updates & Patches" },
  "services.s4.desc": {
    en: "Regular system updates, security patches, and module upgrades to keep your ERP running at peak performance.",
    de: "Regelmäßige Updates, Sicherheitspatches und Modul-Upgrades für maximale ERP-Leistung.",
  },
  "services.s5.title": { en: "24/7 Support", de: "24/7 Support" },
  "services.s5.desc": {
    en: "Round-the-clock technical support with dedicated account managers and guaranteed response times.",
    de: "Rund-um-die-Uhr technischer Support mit dedizierten Ansprechpartnern und garantierten Reaktionszeiten.",
  },
  "services.s6.title": { en: "Security & Compliance", de: "Sicherheit & Compliance" },
  "services.s6.desc": {
    en: "Enterprise-grade security configurations, backups, and compliance auditing built into every deployment.",
    de: "Sicherheitskonfigurationen auf Enterprise-Niveau, Backups und Compliance-Audits in jedem Deployment.",
  },

  // Process
  "process.label": { en: "Our Process", de: "Unser Ablauf" },
  "process.title": { en: "How We Work", de: "So arbeiten wir" },
  "process.s1.title": { en: "Discovery", de: "Analyse" },
  "process.s1.desc": {
    en: "We analyze your business needs, existing systems, and deployment requirements.",
    de: "Wir analysieren Ihre Geschäftsanforderungen, bestehende Systeme und Deployment-Anforderungen.",
  },
  "process.s2.title": { en: "Planning", de: "Planung" },
  "process.s2.desc": {
    en: "Custom deployment roadmap with timelines, module selection, and resource allocation.",
    de: "Individuelle Deployment-Roadmap mit Zeitplänen, Modulauswahl und Ressourcenplanung.",
  },
  "process.s3.title": { en: "Provisioning", de: "Bereitstellung" },
  "process.s3.desc": {
    en: "Odoo 17 installed, configured, and optimized across all your devices and infrastructure.",
    de: "Odoo 17 installiert, konfiguriert und optimiert auf all Ihren Geräten und Ihrer Infrastruktur.",
  },
  "process.s4.title": { en: "Ongoing Support", de: "Laufender Support" },
  "process.s4.desc": {
    en: "Continuous monitoring, updates, and dedicated support to keep everything running smoothly.",
    de: "Kontinuierliches Monitoring, Updates und dedizierter Support für reibungslosen Betrieb.",
  },

  // CTA / Contact
  "cta.title1": { en: "Ready to Deploy", de: "Bereit für" },
  "cta.title2": { en: "?", de: "?" },
  "cta.subtitle": {
    en: "Let's discuss your ERP needs and build a deployment plan tailored to your business.",
    de: "Lassen Sie uns Ihre ERP-Anforderungen besprechen und einen Deployment-Plan für Ihr Unternehmen erstellen.",
  },
  "cta.name": { en: "Name", de: "Name" },
  "cta.namePlaceholder": { en: "Your full name", de: "Ihr vollständiger Name" },
  "cta.email": { en: "Email", de: "E-Mail" },
  "cta.phone": { en: "Phone", de: "Telefon" },
  "cta.message": { en: "Message", de: "Nachricht" },
  "cta.messagePlaceholder": {
    en: "Tell us about your project, current setup, and what you need...",
    de: "Erzählen Sie uns von Ihrem Projekt, Ihrem aktuellen Setup und Ihren Anforderungen...",
  },
  "cta.submit": { en: "Send Message", de: "Nachricht senden" },
  "cta.sending": { en: "Sending...", de: "Wird gesendet..." },
  "cta.fillFields": { en: "Please fill in all required fields", de: "Bitte füllen Sie alle Pflichtfelder aus" },
  "cta.sent": { en: "Message sent!", de: "Nachricht gesendet!" },
  "cta.sentDesc": { en: "We'll get back to you within 24 hours.", de: "Wir melden uns innerhalb von 24 Stunden bei Ihnen." },

  // Footer
  "footer.rights": { en: "All rights reserved.", de: "Alle Rechte vorbehalten." },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("de");

  const t = (key: string): string => {
    return translations[key]?.[language] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
