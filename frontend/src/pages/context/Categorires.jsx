import { createContext, useState } from "react";

export const ApiCategoriescontext=createContext()

export const ApiCategory=({children})=>{
    const[categorydata,setCategorydata]=useState([])
    
 return(
    <ApiCategoriescontext.Provider>
        {children}
    </ApiCategoriescontext.Provider>
 )
}