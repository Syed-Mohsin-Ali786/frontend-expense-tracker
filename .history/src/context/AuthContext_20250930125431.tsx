// src/context/AuthContext.tsx
import { createContext, ReactNode } from "react";
import api from "@/api/axios";

// Define the type for your context
export interface AuthContextType {
  signUp: (form: { name: string; email: string; password: string }) => Promise<any>;
}

// Create the context with default null
const AuthContext = createContext<AuthContextType | null>(null);

// Provider component
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const signUp: AuthContextType["signUp"] = async (form) => {
    const res = await api.post("/signup", form);
    return res.data;
  };

  return (
    <AuthContext.Provider value={{ signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthProvider };
