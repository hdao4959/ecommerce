import { createContext, useMemo, useState } from "react"

export const ProductLineContext = createContext()
const ProductLineProvider = ({ children }) => {
  const [productLine, setProductLine] = useState(null)
  const value  = useMemo(() => ({productLine, setProductLine}), [productLine])
  return <>
    <ProductLineContext.Provider value={value}>
      {
        children
      }
    </ProductLineContext.Provider>
  </>
}
export default ProductLineProvider