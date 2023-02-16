import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function PublicRoute() {
  const { authorization } = useAuthContext();

  if (authorization.email) {
    return <Navigate to="/profile" />;
  }
  return <Outlet />;
}
