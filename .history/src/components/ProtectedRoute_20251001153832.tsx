import { useAuth } from "@/hooks/useAuth";
import type { ReactNode } from "react";


export default function ProtectedRoute({children} :{children:ReactNode}) {
  const { navigate } = useAuth();
  const token = localStorage.getItem("token");
  if (!token) return navigate("/login");
  return children;
}
