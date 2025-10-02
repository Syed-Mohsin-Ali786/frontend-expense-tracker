// src/context/AuthContext.tsx
import { createContext, useState } from "react";
import type { ReactNode } from "react";
import api from "@/api/axios";
import { useNavigate } from "react-router";

// Define the type for your context
export interface AuthContextType {
  signUp: (form: {
    name: string;
    email: string;
    password: string;
  }) => Promise<unknown>;
  navigate: ReturnType<typeof useNavigate>;
}

// Create the context with default null
const AuthContext = createContext<AuthContextType | null>(null);
// Provider component
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();
  const signUp: AuthContextType["signUp"] = async (form) => {
    try {
      const res = await api.post("/api/auth/signup", form);
      setToken(res.data.token as string);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signUp, navigate }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthProvider };
