import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
// import AdminDashboard from "../pages/admin/DashboardPage";
import AdminLayout from "../pages/layouts/AdminLayout";
import AdminDashboard from "../pages/admin/DashboardPage";
import UserList from "../pages/admin/UserList";
import CategoryPage from "../pages/admin/CategoryPage";
import { NotFound } from "../pages/admin/errors/NotFound";
import { NotFoundComponent } from "../components/errors/NotFoundComponent";

export default function RouterConfig() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { index: true, Component: AdminDashboard },
        {
          path: "user",
          Component: UserList,
        },
        {
          path: "category",
          Component: CategoryPage
        },
        {
          path: "*",
          element: <NotFoundComponent redirectTo="/admin/"/>
        }

      ],
    },{
      path: "*", element: <NotFound/>

    }
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
