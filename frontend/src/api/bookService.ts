import api from "./axios";
import type { Book } from "@/data/books";

export interface ApiBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  rating: number;
  coverImage: string;
  description: string;
  publicationYear: number;
  pageCount: number;
  isbn?: string;
}

// Convertir un livre API vers le format frontend
export const toFrontendBook = (apiBook: ApiBook, favorites: string[] = []): Book => ({
  id: apiBook._id,
  title: apiBook.title,
  author: apiBook.author,
  cover: apiBook.coverImage,
  genre: apiBook.genre,
  rating: apiBook.rating,
  year: apiBook.publicationYear,
  description: apiBook.description,
  pages: apiBook.pageCount,
  isFavorite: favorites.includes(apiBook._id),
});

const bookService = {
  getAll: async (params?: {
    genre?: string;
    search?: string;
    sort?: string;
    page?: number;
    limit?: number;
  }) => {
    const res = await api.get("/books", { params });
    return res.data;
  },

  getById: async (id: string) => {
    const res = await api.get(`/books/${id}`);
    return res.data;
  },

  create: async (data: Omit<ApiBook, "_id">) => {
    const res = await api.post("/books", data);
    return res.data;
  },

  update: async (id: string, data: Partial<ApiBook>) => {
    const res = await api.put(`/books/${id}`, data);
    return res.data;
  },

  delete: async (id: string) => {
    const res = await api.delete(`/books/${id}`);
    return res.data;
  },

  // Favoris
  toggleFavorite: async (bookId: string) => {
    const res = await api.post(`/books/${bookId}/favorite`);
    return res.data;
  },

  getFavorites: async () => {
    const res = await api.get("/books/user/favorites");
    return res.data;
  },
};

export default bookService;
