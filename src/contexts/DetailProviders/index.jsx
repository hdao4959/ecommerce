import ColorMapProvider from "./ColorMapProvider"
import CommentProvider from "./CommentContext"
import ProductLineProvider from "./ProductLineContext"
import VariantColorProvider from "./VariantColorProvider"
import VariantProvider from "./VariantContext"
import VariantsProvider from "./VariantsContext"

const DetailProviders = ({ children }) => {
  return <ProductLineProvider>
    <VariantProvider>
      <VariantsProvider>
        <VariantColorProvider>
          <ColorMapProvider>
            <CommentProvider>
              {children}
            </CommentProvider>
          </ColorMapProvider>
        </VariantColorProvider>
      </VariantsProvider>
    </VariantProvider>
  </ProductLineProvider>
}
export default DetailProviders