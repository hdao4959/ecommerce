import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import productRoutes from "./product.routes";
import Home from "../pages/Home";
import notFoundRoutes from "./notFound.routes";
import cartRoutes from "./cart.routes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, element: <Home />
      },
      ...cartRoutes,
      ...productRoutes,
      ...notFoundRoutes
    ]
  }
])

export default routes