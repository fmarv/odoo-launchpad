import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Cpu } from "lucide-react";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: t("nav.services"), href: "/leistungen" },
    { label: t("nav.pricing"), href: "/preise" },
    { label: t("nav.whyErp"), href: "/warum-erp" },
    { label: t("nav.contact"), href: "/kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container px-6 flex items-center justify-between h-16">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 font-display font-bold text-xl"
        >
          <Cpu className="w-6 h-6 text-primary" />
          <span>Ralphun</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => navigate(item.href)}
              className={`text-sm transition-colors ${
                location.pathname === item.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
          <LanguageToggle />
          <Button size="sm" className="font-semibold" onClick={() => navigate("/kontakt")}>
            {t("nav.getStarted")}
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.href}
              className={`block text-sm w-full text-left ${
                location.pathname === item.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => { navigate(item.href); setOpen(false); }}
            >
              {item.label}
            </button>
          ))}
          <Button size="sm" className="w-full font-semibold mt-2" onClick={() => { navigate("/kontakt"); setOpen(false); }}>
            {t("nav.getStarted")}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
