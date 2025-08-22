import {createContext, useMemo, useState} from 'react'
export const ProvincesContext = createContext()
const ProvincesProvider = ({children}) => {
  const [provinces, setProvinces] = useState([])
  const value = useMemo(() => ({provinces, setProvinces}), [provinces])
  return <ProvincesContext.Provider value={value} >
    {children}
  </ProvincesContext.Provider>
}
export default ProvincesProvider