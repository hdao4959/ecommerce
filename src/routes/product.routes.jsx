import DetailProviders from "../contexts/DetailProviders";
import CommentProvider from "../contexts/DetailProviders/CommentContext";
import ProductLineProvider from "../contexts/DetailProviders/ProductLineContext";
import VariantProvider from "../contexts/DetailProviders/VariantContext";
import VariantsProvider from "../contexts/DetailProviders/VariantsContext";
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