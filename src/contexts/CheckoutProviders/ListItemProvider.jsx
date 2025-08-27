import { createContext, useMemo, useState } from "react"

export const ListItemContext = createContext()
const ListItemProvider = ({ children }) => {
  const [listItem, setListItem] = useState([]);
  const value = useMemo(() => ({ listItem, setListItem }), [listItem])
  return <ListItemContext.Provider value={value}>
    {children}
  </ListItemContext.Provider>
}
export default ListItemProvider