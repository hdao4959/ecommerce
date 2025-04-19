import productRoutes from "./product.routes";
import Home from "../../pages/main/Home";
import notFoundRoutes from "./notFound.routes";

const MainRoutes = [
  {
    index: true, element: <Home />
  },
  ...productRoutes,
  ...notFoundRoutes
]

export default MainRoutes