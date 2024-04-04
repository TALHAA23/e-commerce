import { useParams, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Find from "../pages/Find";
import ProductsByProperty from "../pages/ProductsByProperty";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader/Loader";
import Auth from "../Admin/Auth/Auth";

const UserProvider = lazy(() => import("../Context/UserProvider"));
const Admin = lazy(() => import("../Admin/Admin"));
const Upload = lazy(() => import("../Admin/AdminPages/Upload"));
const Modification = lazy(() => import("../Admin/AdminPages/Modification"));

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
          path: "/by-property/:property",
          element: <ProductsByProperty />,
        },
      ],
    },
    {
      path: "/admin",
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader />}>
              <UserProvider>
                <Admin />
              </UserProvider>
            </Suspense>
          ),
        },
        {
          path: "login",
          element: <Auth />,
        },
        {
          path: "upload",
          element: (
            <Suspense fallback={<Loader />}>
              <Upload />
            </Suspense>
          ),
        },
        {
          path: "modification",
          element: (
            <Suspense fallback={<Loader />}>
              <Modification />
            </Suspense>
          ),
        },
      ],
    },
  ]);
}
