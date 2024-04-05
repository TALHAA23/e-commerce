import { Navigate } from "react-router-dom";
import { useIsUserAuthenticated } from "../Context/UserProvider";
import Menu from "./AdminComponents/Menu";

export default function Admin() {
  const isAuthenticated = useIsUserAuthenticated();
  return isAuthenticated ? <Menu /> : <Navigate to="/admin/login" />;
}
