import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import productRoutes from "./product.routes";
import Home from "../pages/Home";
import notFoundRoutes from "./notFound.routes";
import cartRoutes from "./cart.routes";
import BlankLayout from "../layouts/BlankLayout";
import Login from "../pages/Auth/Login";

const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true, element: <Home />
      },
      ...cartRoutes,
      ...productRoutes,
      ...notFoundRoutes
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