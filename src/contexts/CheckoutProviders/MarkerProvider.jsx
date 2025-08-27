import { createContext, useMemo, useState } from "react"

export const MarkerContext = createContext()
const MarkerProvider = ({ children }) => {
  const [marker, setMarker] = useState({
    lat: null,
    lng: null,
  })

  const value = useMemo(() => ({marker, setMarker}),[marker])
  return <MarkerContext.Provider value={value}>
    {children}
  </MarkerContext.Provider>
}
export default MarkerProvider