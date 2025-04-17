import productRoutes from "./product.routes";
import Home from "../../pages/main/Home";

const MainRoutes = [
  {
    index: true, element: <Home />
  },
  ...productRoutes
]

export default MainRoutes