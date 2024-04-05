import React, { useState } from 'react'
import dataContext from './dataContext.js'

const DataProvider=({children})=>{
    const [data,setData]=useState(null);
    return(
        <dataContext.Provider value={{data,setData}}>
            {children}
        </dataContext.Provider>
    )

}
export default DataProvider;