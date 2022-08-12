import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth-context";

export default function PrivateRoute({ children }) {
  const { userIdenty } = useContext(AuthContext)
  if (userIdenty === "") {
    return <Navigate to="/erisim-engellendi" />
  }
  return children
}