import { createContext, useMemo, useState } from "react";

export const VariantsContext = createContext()
const VariantsProvider = ({ children }) => {
  const [variants, setVariants] = useState([])

  const value = useMemo(() => ({ variants, setVariants }), [variants])
  return <VariantsContext.Provider value={value}>
    {children}
  </VariantsContext.Provider>
}
export default VariantsProvider