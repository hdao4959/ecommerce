import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import productRoutes from "./product.routes";
import Home from "../pages/Home";
import notFoundRoutes from "./notFound.routes";
import cartRoutes from "./cart.routes";
import BlankLayout from "../layouts/BlankLayout";
import Login from "../pages/Auth/Login";
import orderRoutes from "./order.routes";
import categoryRoutes from "./category.routes";
import Search from "../pages/Search";

const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true, element: <Home />
      },
      {
        path: "/search", element: <Search/>
      },
      ...cartRoutes,
      ...productRoutes,
      ...notFoundRoutes,
      ...orderRoutes,
      ...categoryRoutes
    ]
  }, {
    element: <BlankLayout/>,
    children: [
      {
        path: '/login', element: <Login/>
      }
    ]
  }
])

export default routes