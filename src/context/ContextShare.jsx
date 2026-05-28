import React, { createContext, useState } from 'react'
//1.create context
export const searchContext=createContext("")
function SearchContextShare({children}) {
  //global state creation
  const [searchKey,setSearchKey]=useState("")
  return (
    
      <searchContext.Provider value={{searchKey,setSearchKey}}>
        {children}
      </searchContext.Provider>
    
  )
}


export default SearchContextShare

