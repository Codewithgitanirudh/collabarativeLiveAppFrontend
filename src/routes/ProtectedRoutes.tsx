import { type ReactNode } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  console.log(user);

  if (!user) {
    return <Navigate to="/signup" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
