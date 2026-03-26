import { BookOpen, Heart, Search, Library, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const navItems = [
  { id: "discover", label: "Découvrir", icon: Search },
  { id: "catalog", label: "Catalogue", icon: Library },
  { id: "favorites", label: "Favoris", icon: Heart },
];

const MobileNav = ({ activeView, onViewChange }: MobileNavProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="md:hidden flex items-center justify-between px-4 py-3 gradient-primary">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary-foreground" />
          <span className="text-lg font-bold font-display text-primary-foreground">BiblioLove</span>
        </div>
        <button onClick={() => setOpen(!open)} className="text-primary-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>
      {open && (
        <div className="md:hidden gradient-primary px-4 pb-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onViewChange(item.id); setOpen(false); }}
              className={cn(
                "flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all",
                activeView === item.id
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileNav;
