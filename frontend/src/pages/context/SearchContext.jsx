import { createContext, useState } from "react";

export const SearchContext=createContext()

export const SearchProvider=({children})=>{
const[searchkey,setsearchkey]=useState({
    keyword:"",
    result:[]
})
return(
    <SearchContext.Provider value={{searchkey,setsearchkey}}>
        {children}
    </SearchContext.Provider>
)
}