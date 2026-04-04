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
  "nav.pricing": { en: "Pricing", de: "Preise" },
  "nav.whyErp": { en: "Why ERP?", de: "Warum ERP?" },
  "nav.contact": { en: "Contact", de: "Kontakt" },
  "nav.getStarted": { en: "Get Started", de: "Beratung anfragen" },

  // Hero
  "hero.badge": { en: "ERP with setup and support for SMEs", de: "ERP mit Einrichtung und Support für KMUs" },
  "hero.title1": { en: "Less Excel chaos.", de: "Weniger" },
  "hero.title2": { en: "More overview for", de: "Mehr Überblick für" },
  "hero.title3": { en: "your business.", de: "Ihren Betrieb." },
  "hero.subtitle": {
    en: "Ralphun bundles your processes into one system and supports you from setup to ongoing operations.",
    de: "Ralphun bündelt eure Abläufe in einem System und begleitet euch von der Einrichtung bis in den laufenden Betrieb.",
  },
  "hero.cta1": { en: "Free Consultation", de: "Kostenlose Erstberatung" },
  "hero.cta2": { en: "View Services", de: "Leistungen ansehen" },
  "hero.stat.deployments": { en: "Deployments", de: "Deployments" },
  "hero.stat.uptime": { en: "Uptime", de: "Verfügbarkeit" },
  "hero.stat.support": { en: "Support", de: "Support" },
  "hero.stat.response": { en: "Response Time", de: "Reaktionszeit" },

  // Journey Cards
  "journey.label": { en: "Your Path", de: "Ihr Weg" },
  "journey.title": { en: "How can we help you?", de: "Wie können wir Ihnen helfen?" },
  "journey.services.title": { en: "Our Services", de: "Unsere Leistungen" },
  "journey.services.desc": {
    en: "From needs analysis to setup, migration, training, and ongoing support — we cover everything.",
    de: "Von der Bedarfsanalyse über Einrichtung, Migration, Schulung bis zum laufenden Support — wir decken alles ab.",
  },
  "journey.services.cta": { en: "Explore Services", de: "Leistungen entdecken" },
  "journey.pricing.title": { en: "Transparent Pricing", de: "Transparente Preise" },
  "journey.pricing.desc": {
    en: "No hidden costs. Choose the package that fits your company — from self-operation to full managed service.",
    de: "Keine versteckten Kosten. Wählt das Paket, das zu eurem Unternehmen passt — vom Eigenbetrieb bis zum Full-Service.",
  },
  "journey.pricing.cta": { en: "View Pricing", de: "Preise ansehen" },
  "journey.why.title": { en: "Why ERP?", de: "Warum ERP?" },
  "journey.why.desc": {
    en: "See how an ERP system eliminates everyday pain points and delivers measurable ROI for your business.",
    de: "Erfahrt, wie ein ERP-System alltägliche Probleme löst und messbaren ROI für euer Unternehmen bringt.",
  },
  "journey.why.cta": { en: "Learn More", de: "Mehr erfahren" },
  "journey.contact.title": { en: "Get in Touch", de: "Kontakt aufnehmen" },
  "journey.contact.desc": {
    en: "Ready to get started? Tell us about your project and we'll create a tailored plan for your business.",
    de: "Bereit loszulegen? Erzählt uns von eurem Projekt und wir erstellen einen maßgeschneiderten Plan.",
  },
  "journey.featured": { en: "Start Here", de: "Hier starten" },
  "journey.contact.cta": { en: "Contact Us", de: "Jetzt anfragen" },

  // Services
  "services.label": { en: "What We Do", de: "Was wir tun" },
  "services.title": { en: "End-to-End ERP Services", de: "Ganzheitliche ERP-Dienstleistungen" },
  "services.subtitle": {
    en: "From initial provisioning to long-term support, we cover every step of your Odoo 17 journey.",
    de: "Von der Ersteinrichtung bis zum Langzeit-Support begleiten wir jeden Schritt Ihrer Odoo 17 Reise.",
  },
  "services.s1.title": { en: "Needs Analysis", de: "Bedarf und Prozessaufnahme" },
  "services.s1.desc": {
    en: "We look at your business, bottlenecks, and where an ERP will have the greatest impact.",
    de: "Wir schauen auf euren Betrieb, eure Engpässe und die Bereiche, in denen ein ERP die größte Wirkung entfalten soll.",
  },
  "services.s2.title": { en: "ERP Setup", de: "ERP-Einrichtung" },
  "services.s2.desc": {
    en: "Modules, roles, and core processes configured so your team can work productively from day one.",
    de: "Module, Rollen und zentrale Abläufe werden so aufgesetzt, dass euer Team praktisch arbeiten kann.",
  },
  "services.s3.title": { en: "Data Migration", de: "Daten zusammenführen" },
  "services.s3.desc": {
    en: "Existing data from spreadsheets, standalone solutions, or legacy systems consolidated into one clean base.",
    de: "Bestehende Informationen aus Tabellen, Einzellösungen oder alten Systemen in eine saubere Arbeitsbasis überführt.",
  },
  "services.s4.title": { en: "Team Onboarding", de: "Einführung im Team" },
  "services.s4.desc": {
    en: "We support not just technically, but help ensure the ERP is understood and adopted by your team.",
    de: "Wir unterstützen nicht nur technisch, sondern helfen dabei, dass das ERP im Alltag verstanden und angenommen wird.",
  },
  "services.s5.title": { en: "Operations & Security", de: "Betrieb & Sicherheit" },
  "services.s5.desc": {
    en: "The system stays maintained and technically supported so you can focus on your business.",
    de: "Das System bleibt gepflegt und technisch betreut, damit ihr euch auf euer Unternehmen konzentrieren könnt.",
  },
  "services.s6.title": { en: "Support & Development", de: "Support & Weiterentwicklung" },
  "services.s6.desc": {
    en: "When new requirements arise or questions come up in daily business, you have a direct contact person.",
    de: "Wenn neue Anforderungen entstehen oder Fragen im Tagesgeschäft auftauchen, habt ihr einen direkten Ansprechpartner.",
  },

  // Pricing
  "pricing.label": { en: "Pricing", de: "Preise" },
  "pricing.title": { en: "Fair & Transparent", de: "Fair & Transparent" },
  "pricing.subtitle": {
    en: "Start without recurring costs and add exactly the services you actually need.",
    de: "Startet ohne laufende Pflichtkosten und schaltet genau die Services dazu, die ihr wirklich braucht.",
  },
  "pricing.popular": { en: "Popular", de: "Beliebt" },
  "pricing.cta": { en: "Choose Plan", de: "Paket wählen" },
  "pricing.plan1.name": { en: "Self-Operated", de: "Eigenbetrieb" },
  "pricing.plan1.price": { en: "0 €/mo", de: "0 €/Monat" },
  "pricing.plan1.desc": { en: "One-time setup, then you decide if you need ongoing support.", de: "Einmalige Einführung, danach entscheidet ihr selbst über laufende Betreuung." },
  "pricing.plan1.f1": { en: "Own hardware or Ralphun device", de: "Eigene Hardware oder Ralphun-Gerät" },
  "pricing.plan1.f2": { en: "No monthly minimum commitment", de: "Keine monatliche Mindestverpflichtung" },
  "pricing.plan1.f3": { en: "Support bookable on demand", de: "Support und Weiterentwicklung bei Bedarf zubuchbar" },
  "pricing.plan2.name": { en: "Ralphun Care", de: "Ralphun Care" },
  "pricing.plan2.price": { en: "149 €/mo", de: "149 €/Monat" },
  "pricing.plan2.desc": { en: "Reachable contact, ticket channel, and structured support.", de: "Erreichbarer Ansprechpartner, Ticketkanal und geregelter Betreuungsrahmen." },
  "pricing.plan2.f1": { en: "Access to Ralphun portal & ticket channel", de: "Zugang zu Ralphun-Portal und Ticketkanal" },
  "pricing.plan2.f2": { en: "Regular operations & update checks", de: "Regelmäßiger Betriebs- und Update-Check" },
  "pricing.plan2.f3": { en: "Clean entry into ongoing support", de: "Sauberer Einstieg in laufende Betreuung" },
  "pricing.plan3.name": { en: "Care Plus", de: "Care Plus" },
  "pricing.plan3.price": { en: "349 €/mo", de: "349 €/Monat" },
  "pricing.plan3.desc": { en: "Monitoring, backup oversight, and priority support.", de: "Monitoring, Backup-Blick und priorisierte Unterstützung." },
  "pricing.plan3.f1": { en: "Proactive instance & backup monitoring", de: "Proaktive Sicht auf Instanz- und Backup-Status" },
  "pricing.plan3.f2": { en: "Monthly service rhythm with higher priority", de: "Monatlicher Service-Rhythmus mit höherer Priorität" },
  "pricing.plan3.f3": { en: "Great base for custom apps & development", de: "Gute Basis für Custom Apps und laufende Entwicklung" },

  // Why ERP
  "why.label": { en: "Why ERP?", de: "Warum ERP?" },
  "why.title": { en: "Do you recognize these situations?", de: "Erkennst du diese Situationen?" },
  "why.subtitle": {
    en: "Most SMEs don't realize an ERP solves their everyday problems — not just for large corporations, but right now.",
    de: "Die meisten KMUs wissen nicht, dass ein ERP genau ihre alltäglichen Probleme löst — nicht erst ab 500 Mitarbeitern.",
  },
  "why.painTitle": { en: "Common Pain Points", de: "Häufige Problemstellen" },
  "why.pain1": { en: "Orders, inventory, or invoices run via Excel spreadsheets", de: "Aufträge, Lager oder Rechnungen laufen über Excel-Tabellen" },
  "why.pain2": { en: "Information must be gathered from multiple programs", de: "Informationen müssen aus verschiedenen Programmen zusammengesucht werden" },
  "why.pain3": { en: "Same data entered manually in multiple systems", de: "Dieselben Daten werden in mehreren Systemen manuell eingetragen" },
  "why.pain4": { en: "No real-time overview of inventory levels", de: "Kein Echtzeit-Überblick über den Lagerbestand" },
  "why.pain5": { en: "Quotes and invoices created manually in Word/Excel", de: "Angebote und Rechnungen werden manuell in Word oder Excel erstellt" },
  "why.pain6": { en: "Month-end reports take disproportionate time", de: "Monatsabschlüsse kosten unverhältnismäßig viel Zeit" },
  "why.statsTitle": { en: "Measurable Results", de: "Messbare Ergebnisse" },
  "why.stat1": { en: "Avg. ROI after ERP", de: "Ø ROI nach ERP-Einführung" },
  "why.stat2": { en: "Faster month-end", de: "Schnellerer Monatsabschluss" },
  "why.stat3": { en: "Efficiency in order processing", de: "Effizienzgewinn Auftragsbearbeitung" },
  "why.stat4": { en: "Avg. payback period", de: "Ø Amortisationszeit" },
  "why.ctaHint": { en: "Free, no-obligation consultation", de: "Kostenlose, unverbindliche Beratung" },
  "why.cta": { en: "Request Consultation", de: "Erstberatung anfragen" },

  // CTA / Contact
  "cta.title1": { en: "Ready for", de: "Bereit für" },
  "cta.title2": { en: "?", de: "?" },
  "cta.subtitle": {
    en: "Let's discuss your ERP needs and build a deployment plan tailored to your business.",
    de: "Lasst uns eure ERP-Anforderungen besprechen und gemeinsam einen Plan entwickeln.",
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
