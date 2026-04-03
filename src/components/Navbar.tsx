import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Cpu } from "lucide-react";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.process"), href: "#process" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container px-6 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 font-display font-bold text-xl">
          <Cpu className="w-6 h-6 text-primary" />
          <span>ERPDeploy</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <LanguageToggle />
          <Button size="sm" className="font-semibold">{t("nav.getStarted")}</Button>
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
            <a
              key={item.href}
              href={item.href}
              className="block text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button size="sm" className="w-full font-semibold mt-2">{t("nav.getStarted")}</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
