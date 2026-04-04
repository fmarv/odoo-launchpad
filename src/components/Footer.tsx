import { Cpu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <footer className="border-t border-border py-12">
      <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 font-display font-bold">
          <Cpu className="w-5 h-5 text-primary" />
          Ralphun
        </button>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ralphun. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
