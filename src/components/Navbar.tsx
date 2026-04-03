import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Cpu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container px-6 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 font-display font-bold text-xl">
          <Cpu className="w-6 h-6 text-primary" />
          <span>ERPDeploy</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
          <Button size="sm" className="font-semibold">Get Started</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {["Services", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button size="sm" className="w-full font-semibold mt-2">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
