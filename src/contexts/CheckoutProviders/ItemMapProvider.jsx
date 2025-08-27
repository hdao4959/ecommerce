import { createContext, useMemo, useState } from "react";

export const ItemMapContext = createContext()
const ItemMapProvider = ({ children }) => {
  const [itemMap, setItemMap] = useState({})
  const value = useMemo(() => ({ itemMap, setItemMap }), [itemMap])

  return <ItemMapContext.Provider value={value}>
    {children}
  </ItemMapContext.Provider>
}
export default ItemMapProvider