import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({ allowedRoles }) {
  const { authorization } = useAuthContext();
  // const admin = authorization.role === 1;
  // const designer = authorization.role === 2;
  // const operator = authorization.role === 3;
  // const workshop = authorization.role === 4;

  return allowedRoles?.includes(authorization.role) ? (
    <Outlet />
  ) : authorization.role ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
}
