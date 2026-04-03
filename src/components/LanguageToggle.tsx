import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "de" : "en")}
      className="relative flex items-center w-16 h-8 rounded-full border border-border bg-secondary/50 backdrop-blur-sm cursor-pointer overflow-hidden"
      aria-label="Toggle language"
    >
      <span
        className={`z-10 flex-1 text-xs font-semibold text-center transition-colors duration-200 ${
          language === "de" ? "text-primary-foreground" : "text-muted-foreground"
        }`}
      >
        DE
      </span>
      <span
        className={`z-10 flex-1 text-xs font-semibold text-center transition-colors duration-200 ${
          language === "en" ? "text-primary-foreground" : "text-muted-foreground"
        }`}
      >
        EN
      </span>
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-primary"
        style={{ left: language === "de" ? 2 : undefined, right: language === "en" ? 2 : undefined }}
      />
    </button>
  );
};

export default LanguageToggle;
