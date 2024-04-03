import { useParams, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Find from "../pages/Find";
import ProductsByProperty from "../pages/ProductsByProperty";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader/Loader";

const UserProvider = lazy(() => import("../Context/UserProvider"));
const Admin = lazy(() => import("../Admin/Admin"));

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
    // {
    //   path: "/admin",
    //   children: [
    //     {
    //       index: true,
    //       element: (
    //         <Suspense fallback={<Loader />}>
    //           <UserProvider>
    //             <Admin />
    //           </UserProvider>
    //         </Suspense>
    //       ),
    //     },
    //     {
    //       path: "login",
    //       element: <h1>Login</h1>,
    //     },
    //   ],
    // },
  ]);
}
