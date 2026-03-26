import { X, Heart, Star, BookOpen, Calendar, Hash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Book } from "@/data/books";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BookDetailProps {
  book: Book | null;
  onClose: () => void;
  onToggleFavorite: (id: string) => void;
}

const BookDetail = ({ book, onClose, onToggleFavorite }: BookDetailProps) => {
  if (!book) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-2/5 p-6">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full rounded-xl shadow-lg aspect-[3/4] object-cover"
              />
            </div>
            <div className="flex-1 p-6 sm:pl-0">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-3">
                    {book.genre}
                  </span>
                  <h2 className="text-2xl font-display font-bold text-card-foreground">{book.title}</h2>
                  <p className="text-muted-foreground mt-1">{book.author}</p>
                </div>
                <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span className="text-sm font-semibold">{book.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{book.year}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Hash className="h-4 w-4" />
                  <span className="text-sm">{book.pages} pages</span>
                </div>
              </div>

              <p className="text-muted-foreground mt-6 leading-relaxed">{book.description}</p>

              <div className="flex gap-3 mt-8">
                <Button className="flex-1 gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Commencer à lire
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onToggleFavorite(book.id)}
                  className={cn(
                    "border-border",
                    book.isFavorite && "bg-secondary text-primary border-primary/30"
                  )}
                >
                  <Heart className={cn("h-4 w-4", book.isFavorite && "fill-primary text-primary")} />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookDetail;
