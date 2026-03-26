import { BookOpen, Heart, Search, Library, TrendingUp, Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppSidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const navItems = [
  { id: "discover", label: "Découvrir", icon: Search },
  { id: "catalog", label: "Catalogue", icon: Library },
  { id: "favorites", label: "Favoris", icon: Heart },
  { id: "trending", label: "Tendances", icon: TrendingUp },
  { id: "recent", label: "Récents", icon: Clock },
  { id: "top-rated", label: "Mieux Notés", icon: Star },
];

const AppSidebar = ({ activeView, onViewChange }: AppSidebarProps) => {
  return (
    <aside className="hidden md:flex w-64 flex-col gradient-primary min-h-screen p-6">
      <div className="flex items-center gap-3 mb-10">
        <BookOpen className="h-8 w-8 text-primary-foreground" />
        <h1 className="text-xl font-bold font-display text-primary-foreground">BiblioLove</h1>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-left",
              activeView === item.id
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-primary-foreground/20">
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="h-9 w-9 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground font-semibold text-sm">
            JD
          </div>
          <div>
            <p className="text-sm font-medium text-primary-foreground">Jean Dupont</p>
            <p className="text-xs text-primary-foreground/60">Lecteur passionné</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;
