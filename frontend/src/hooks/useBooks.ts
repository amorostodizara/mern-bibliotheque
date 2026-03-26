import { useState, useEffect, useMemo, useCallback } from "react";
import bookService, { toFrontendBook, type ApiBook } from "@/api/bookService";
import { books as staticBooks, type Book } from "@/data/books";
import { useAuth } from "@/contexts/AuthContext";

const API_URL = import.meta.env.VITE_API_URL;

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>(staticBooks);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isApiConnected, setIsApiConnected] = useState(false);
  const auth = useAuth();

  // Essayer de charger depuis l'API, fallback sur données statiques
  const fetchBooks = useCallback(async () => {
    if (!API_URL) {
      setBooks(staticBooks);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await bookService.getAll();
      const favorites = auth.user?.favorites || [];
      const mapped = data.books
        ? data.books.map((b: ApiBook) => toFrontendBook(b, favorites))
        : data.map((b: ApiBook) => toFrontendBook(b, favorites));
      setBooks(mapped);
      setIsApiConnected(true);
    } catch {
      console.warn("API non disponible, utilisation des données statiques");
      setBooks(staticBooks);
      setIsApiConnected(false);
    } finally {
      setLoading(false);
    }
  }, [auth.user?.favorites]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const toggleFavorite = useCallback(async (id: string) => {
    // Mise à jour optimiste
    setBooks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, isFavorite: !b.isFavorite } : b))
    );

    if (isApiConnected) {
      try {
        await bookService.toggleFavorite(id);
      } catch {
        // Rollback si erreur
        setBooks((prev) =>
          prev.map((b) => (b.id === id ? { ...b, isFavorite: !b.isFavorite } : b))
        );
      }
    }
  }, [isApiConnected]);

  return { books, loading, error, isApiConnected, toggleFavorite, refetch: fetchBooks };
};
