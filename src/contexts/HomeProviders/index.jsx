import React from 'react'
import CollectionsProvider from './CollectionsProvider'
const HomeProviders = ({children}) => {
  return (
    <CollectionsProvider>
      {
        children
      }
    </CollectionsProvider>
  )
}

export default HomeProviders
