import { createContext, useMemo, useState } from "react"

export const ColorMapContext = createContext()
const ColorMapProvider = ({ children }) => {
  const [colorMap, setColorMap] = useState([])

  const value = useMemo(() => ({ colorMap, setColorMap }), [colorMap])
  return <ColorMapContext.Provider value={value}>
    {children}
  </ColorMapContext.Provider>
}
export default ColorMapProvider