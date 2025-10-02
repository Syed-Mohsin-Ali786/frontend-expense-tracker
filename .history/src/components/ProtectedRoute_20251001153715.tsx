import { useAuth } from "@/hooks/useAuth";


export default function ProtectedRoute({ children }) {
  const { navigate } = useAuth();
  const token = localStorage.getItem("token");
  if (!token) return navigate("/login");
  return children;
}
