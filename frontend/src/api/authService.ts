import api from "./axios";

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  _id: string;
  username: string;
  email: string;
  avatar: string;
  token: string;
  favorites: string[];
}

const authService = {
  register: async (data: RegisterData): Promise<AuthResponse> => {
    const res = await api.post("/auth/register", data);
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
  },

  login: async (data: LoginData): Promise<AuthResponse> => {
    const res = await api.post("/auth/login", data);
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  getProfile: async () => {
    const res = await api.get("/auth/profile");
    return res.data;
  },

  updateProfile: async (data: Partial<{ username: string; email: string; avatar: string }>) => {
    const res = await api.put("/auth/profile", data);
    return res.data;
  },

  getCurrentUser: (): AuthResponse | null => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem("token");
  },
};

export default authService;
