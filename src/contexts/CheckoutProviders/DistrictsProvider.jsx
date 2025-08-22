import { createContext, useMemo, useState } from "react";
export const DistrictsContext = createContext()
const DistrictsProvider = ({ children }) => {
  const [districts, setDistricts] = useState([]);
  const value = useMemo(() => ({districts, setDistricts}), [districts])
  return <DistrictsContext.Provider value={value} >
    {children}
  </DistrictsContext.Provider>
}

export default DistrictsProvider