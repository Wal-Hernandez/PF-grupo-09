import { useAuth } from "../../context/context";

import { getAuth } from "firebase/auth";
import { Login } from "./Login";
export function ProtectedRoutedAdmin({ children }) {
  const auth = getAuth();
  const user = auth.currentUser;
  const { loading } = useAuth();

  if (!user) {
    return <Login />;
  }

  if (loading) return <h1>Loading</h1>;

  if (user.email !== "productowner@henry.com") {
    return <Login />;
  }
  return <>{children}</>;
}
