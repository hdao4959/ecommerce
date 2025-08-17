import { createContext, useMemo, useState } from "react"
export const VariantColorContext = createContext();
const VariantColorProvider = ({children}) => {
  const [variantColor, setVariantColor] = useState(null)
  const value = useMemo(() => ({variantColor, setVariantColor}), [variantColor])
  return <VariantColorContext.Provider value={value}>
    {children}
  </VariantColorContext.Provider>
}

export default VariantColorProvider