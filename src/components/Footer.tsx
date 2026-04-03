import { Cpu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-12">
      <div className="container px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-display font-bold">
          <Cpu className="w-5 h-5 text-primary" />
          ERPDeploy
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ERPDeploy. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
