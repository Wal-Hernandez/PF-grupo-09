import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/context";

export function ProtectedRouted({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading</h1>;

  if (!user) return <Navigate to="/log" />;

  return <>{children}</>;
}
