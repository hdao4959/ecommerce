import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/main/Home";
import MainRoutes from "./Main";
// import MainRoutes from "./Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, element: <Home />
      },
      ...MainRoutes
    ]
  }
])

export default routes