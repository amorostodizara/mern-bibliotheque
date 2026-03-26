import { BookOpen, Heart, Star, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface StatsBarProps {
  totalBooks: number;
  favorites: number;
}

const StatsBar = ({ totalBooks, favorites }: StatsBarProps) => {
  const stats = [
    { icon: BookOpen, label: "Livres", value: totalBooks, color: "text-primary" },
    { icon: Heart, label: "Favoris", value: favorites, color: "text-primary" },
    { icon: Star, label: "Note moy.", value: "4.6", color: "text-primary" },
    { icon: TrendingUp, label: "Ce mois", value: "+12", color: "text-primary" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-card rounded-xl p-4 border border-border/50 flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
            <stat.icon className={cn("h-5 w-5", stat.color)} />
          </div>
          <div>
            <p className="text-xl font-bold text-card-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

import { cn } from "@/lib/utils";
export default StatsBar;
