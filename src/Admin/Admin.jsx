import { Navigate } from "react-router-dom";
import {
  useAuthenticationLoading,
  useIsUserAuthenticated,
} from "../Context/UserProvider";
import Menu from "./AdminComponents/Menu";
import Loader from "../components/Loader/Loader";

export default function Admin() {
  const isAuthenticated = useIsUserAuthenticated();
  const loading = useAuthenticationLoading();
  return loading ? (
    <Loader />
  ) : isAuthenticated ? (
    <Menu />
  ) : (
    <Navigate to="/admin/login" />
  );
}
