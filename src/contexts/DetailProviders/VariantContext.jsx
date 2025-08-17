import { createContext, useMemo, useState } from "react";

export const VariantContext = createContext()

const VariantProvider = ({children}) => {
  const [variant, setVariant] = useState(null);
  const value = useMemo(() => ({variant, setVariant}), [variant])

  return <VariantContext.Provider value={value}>
    {children}
  </VariantContext.Provider>
}

export default VariantProvider