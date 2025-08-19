import { createContext, useMemo, useState } from "react";

export const CollectionsContext = createContext()
const CollectionsProvider = ({ children }) => {
  const [collections, setCollections] = useState([])
  
  const value = useMemo(() => ({ collections, setCollections }), [collections])
  return <CollectionsContext.Provider value={value}>
    {children}
  </CollectionsContext.Provider>
}

export default CollectionsProvider