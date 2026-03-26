import api from "./axios";

export interface Review {
  _id: string;
  user: { _id: string; username: string; avatar: string };
  book: string;
  rating: number;
  comment: string;
  createdAt: string;
}

const reviewService = {
  getByBook: async (bookId: string) => {
    const res = await api.get(`/reviews/book/${bookId}`);
    return res.data as Review[];
  },

  create: async (data: { book: string; rating: number; comment: string }) => {
    const res = await api.post("/reviews", data);
    return res.data;
  },

  update: async (id: string, data: { rating?: number; comment?: string }) => {
    const res = await api.put(`/reviews/${id}`, data);
    return res.data;
  },

  delete: async (id: string) => {
    const res = await api.delete(`/reviews/${id}`);
    return res.data;
  },

  getMyReviews: async () => {
    const res = await api.get("/reviews/user/me");
    return res.data as Review[];
  },
};

export default reviewService;
