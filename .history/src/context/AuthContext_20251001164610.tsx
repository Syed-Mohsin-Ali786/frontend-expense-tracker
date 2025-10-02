// src/context/AuthContext.tsx
import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import api from "@/api/axios";
import { useNavigate } from "react-router";

// User type from backend
interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextType {
  signUp: (form: { name: string; email: string; password: string }) => Promise<void>;
  token: string | null;
  user: User | null;
  navigate: ReturnType<typeof useNavigate>;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Load from localStorage once
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const navigate = useNavigate();

  const signUp: AuthContextType["signUp"] = async (form) => {
    try {
      const res = await api.post("/api/auth/signup", form);
      console.log(res);
      
      const { token: newToken, user: newUser } = res.data;

      if (newToken) {
        setToken(newToken);
        localStorage.setItem("token", newToken);
      }
      if (newUser) {
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  // keep axios default header in sync with token
  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common["Authorization"];
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ signUp, navigate, token, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthProvider };
