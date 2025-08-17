import { createContext, useMemo, useState } from "react"
export const CommentContext = createContext()

const CommentProvider = ({ children }) => {
  const [comments, setComments] = useState([])
  const value = useMemo(() => ({ comments, setComments }), [comments])
  return (
    <CommentContext.Provider value={value}>
      {
        children
      }
    </CommentContext.Provider>
  )
}

export default CommentProvider