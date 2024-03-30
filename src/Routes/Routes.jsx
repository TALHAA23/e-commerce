import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Product from "../pages/Product";

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
          path: "p",
          element: <Product />,
        },
      ],
    },
  ]);
}
