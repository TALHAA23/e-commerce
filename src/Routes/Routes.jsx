import { useParams, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Find from "../pages/Find";
import ProductsByProperty from "../pages/ProductsByProperty";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader/Loader";
// import AdminLayout from "../Admin/AdminComponents/AdminLayout";
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
      element: (
        <Suspense fallback={<Loader />}>
          <UserProvider>
            <Suspense fallback={<Loader />}>
              <AdminLayout />
            </Suspense>
          </UserProvider>
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader />}>
              <Admin />
            </Suspense>
          ),
        },
        {
          path: "login",
          element: (
            <Suspense fallback={<Loader />}>
              <Auth />
            </Suspense>
          ),
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
