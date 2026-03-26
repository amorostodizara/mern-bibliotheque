import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Book } from "@/data/books";
import { cn } from "@/lib/utils";

interface BookCardProps {
  book: Book;
  onToggleFavorite: (id: string) => void;
  onSelect: (book: Book) => void;
  index?: number;
}

const BookCard = ({ book, onToggleFavorite, onSelect, index = 0 }: BookCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group cursor-pointer"
      onClick={() => onSelect(book)}
    >
      <div className="relative overflow-hidden rounded-xl bg-card shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); onToggleFavorite(book.id); }}
          className={cn(
            "absolute top-3 right-3 h-9 w-9 rounded-full flex items-center justify-center transition-all duration-200",
            book.isFavorite
              ? "bg-primary text-primary-foreground"
              : "bg-card/80 backdrop-blur text-muted-foreground hover:text-primary"
          )}
        >
          <Heart className={cn("h-4 w-4", book.isFavorite && "fill-current")} />
        </button>

        <div className="p-4">
          <div className="flex items-center gap-1 mb-2">
            <Star className="h-3.5 w-3.5 text-primary fill-primary" />
            <span className="text-xs font-medium text-muted-foreground">{book.rating}</span>
            <span className="text-xs text-muted-foreground ml-auto">{book.genre}</span>
          </div>
          <h3 className="font-display font-semibold text-card-foreground leading-tight line-clamp-1">{book.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
