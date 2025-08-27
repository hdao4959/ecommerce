import { useState, createContext, useMemo } from "react";

export const WardsContext = createContext()
const WardsProvider = ({ children }) => {
  const [wards, setWards] = useState([]);
  const value = useMemo(() => ({wards, setWards}), [wards])

  return <WardsContext.Provider value={value}>
    {children}
  </WardsContext.Provider>
}

export default WardsProvider