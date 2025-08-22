import { useState, createContext, useMemo } from "react";

export const WardContext = createContext()
const WardProvider = ({ children }) => {
  const [wards, setWards] = useState([]);
  const value = useMemo(() => ({wards, setWards}), [wards])
  
  return <WardContext.Provider value={value}>
    {children}
  </WardContext.Provider>
}

export default WardProvider