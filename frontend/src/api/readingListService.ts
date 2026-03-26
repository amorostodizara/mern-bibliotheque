import api from "./axios";

export interface ReadingListBook {
  book: string | { _id: string; title: string; author: string; coverImage: string };
  addedAt: string;
  status: "À lire" | "En cours" | "Terminé" | "Abandonné";
  currentPage: number;
}

export interface ReadingList {
  _id: string;
  user: string;
  name: string;
  books: ReadingListBook[];
}

const readingListService = {
  getAll: async () => {
    const res = await api.get("/reading-lists");
    return res.data as ReadingList[];
  },

  getById: async (id: string) => {
    const res = await api.get(`/reading-lists/${id}`);
    return res.data as ReadingList;
  },

  create: async (name: string) => {
    const res = await api.post("/reading-lists", { name });
    return res.data as ReadingList;
  },

  delete: async (id: string) => {
    const res = await api.delete(`/reading-lists/${id}`);
    return res.data;
  },

  addBook: async (listId: string, bookId: string) => {
    const res = await api.post(`/reading-lists/${listId}/books`, { bookId });
    return res.data as ReadingList;
  },

  removeBook: async (listId: string, bookId: string) => {
    const res = await api.delete(`/reading-lists/${listId}/books/${bookId}`);
    return res.data as ReadingList;
  },

  updateBookStatus: async (
    listId: string,
    bookId: string,
    data: { status?: string; currentPage?: number }
  ) => {
    const res = await api.put(`/reading-lists/${listId}/books/${bookId}`, data);
    return res.data as ReadingList;
  },
};

export default readingListService;
