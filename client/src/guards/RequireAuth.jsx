import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ allowedRole }) => {
  const { user } = useSelector((state) => state.auth);

  // Redirect to login if user is not authenticated
  if (!user) return <Navigate to="/" />;

  // Check for allowed role
  return user.role === allowedRole ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" />
  );
};

export default RequireAuth;
