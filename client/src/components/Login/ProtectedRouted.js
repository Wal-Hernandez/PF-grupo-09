import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/context";

export function ProtectedRouted({ children }) {
  const { user, loading } = useAuth();
  console.log("aca user", user);

  if (!user) return <Navigate to="/log" />;

  return <>{children}</>;
}
