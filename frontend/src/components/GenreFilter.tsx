import { cn } from "@/lib/utils";
import { genres } from "@/data/books";

interface GenreFilterProps {
  activeGenre: string;
  onGenreChange: (genre: string) => void;
}

const GenreFilter = ({ activeGenre, onGenreChange }: GenreFilterProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onGenreChange(genre)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200",
            activeGenre === genre
              ? "gradient-primary text-primary-foreground shadow-md"
              : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
