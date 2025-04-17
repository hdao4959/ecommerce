import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/main/Home";
import Detail from "../../pages/main/Product/Detail";

const productRoutes = [
      {
        path: '/products/:id', element: <Detail />
      }
    ]
   


export default productRoutes