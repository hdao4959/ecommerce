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
import authRoutes from "./auth.routes";
import HomeProviders from "../contexts/HomeProviders";
const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true, element: (<HomeProviders>
          <Home />
        </HomeProviders>)
      },
      {
        path: "/search", element: <Search />
      },
      ...cartRoutes,
      ...productRoutes,
      ...notFoundRoutes,
      ...orderRoutes,
      ...categoryRoutes
    ]
  }, {
    element: <BlankLayout />,
    children: [
      ...authRoutes
    ]
  }
])

export default routes