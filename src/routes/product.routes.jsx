import DetailProviders from "../contexts/DetailProviders";
import Detail from "../pages/Product/Detail";

const productRoutes = [
  {
    path: '/products/:slug', element: (
      <DetailProviders>
        <Detail />
      </DetailProviders>

    )
  }
]



export default productRoutes