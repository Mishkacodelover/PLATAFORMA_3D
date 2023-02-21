import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({ allowedRoles }) {
  const { authorization } = useAuthContext();

  return allowedRoles?.includes(authorization.role) ? (
    <Outlet />
  ) : authorization.role ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
}
