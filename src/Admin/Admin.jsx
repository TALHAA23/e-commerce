import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserProvider";
import { useEffect } from "react";

export default function Admin() {
  const user = useUser();

  return user ? <Admin /> : <Redirect />;
}

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => navigate("/admin/login"), []);
  return <h1>redirecting....</h1>;
};
