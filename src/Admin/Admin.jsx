import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserProvider";
import { useEffect } from "react";
import Menu from "./AdminComponents/Menu";

export default function Admin() {
  const user = useUser();
  return <Menu />;
  // return user ? <Admin /> : <Redirect />;
}

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => navigate("/admin/login"), []);
  return <h1>redirecting....</h1>;
};
