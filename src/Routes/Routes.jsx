import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Find from "../pages/Find";
import Catagories from "../pages/Catagories";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/find",
          element: <Find />,
        },
        {
          path: "/c/:category",
          element: <Catagories />,
        },
      ],
    },
  ]);
}
