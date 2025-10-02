import { createContext, type ReactNode } from "react";
import api from "../api/axios.js"

export interface AuthContextType {
  signUp: (form: { name: string; email: string; password: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const signUp = async (form: { name: string; email: string; password: string }) => {
    try {
      // Call your backend signup API
      const res = await api.post("/auth/signup", form);
      console.log("Signup successful:", res.data);

      // optional: store token in localStorage
      // localStorage.setItem("token", res.data.token);

    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
