import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import { lazy } from "react";
import MySuspense from "../components/MySuspense";
const Find = lazy(() => import("../pages/Find"));
const ProductsByProperty = lazy(() => import("../pages/ProductsByProperty"));
// admin
const AdminLayout = lazy(() => import("../Admin/AdminComponents/AdminLayout"));
const UserProvider = lazy(() => import("../Context/UserProvider"));
const Admin = lazy(() => import("../Admin/Admin"));
const Upload = lazy(() => import("../Admin/AdminPages/Upload"));
const Modification = lazy(() => import("../Admin/AdminPages/Modification"));
const Auth = lazy(() => import("../Admin/Auth/Auth"));

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
          element: <MySuspense children={<Find />} />,
        },
        {
          path: "/by-property/:property",
          element: <MySuspense children={<ProductsByProperty />} />,
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <MySuspense
          children={
            <UserProvider>
              <AdminLayout />
            </UserProvider>
          }
        />
      ),
      children: [
        {
          index: true,
          element: <MySuspense children={<Admin />} />,
        },
        {
          path: "login",
          element: <MySuspense children={<Auth />} />,
        },
        {
          path: "upload",
          element: <MySuspense children={<Upload />} />,
        },
        {
          path: "modification",
          element: <MySuspense children={<Modification />} />,
        },
      ],
    },
  ]);
}
