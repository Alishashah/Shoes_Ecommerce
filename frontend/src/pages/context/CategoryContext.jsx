import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CategoryContext=createContext()

export const CategoryData=({children})=>{
    const[categorydata,setCategorydata]=useState([])

    const getallcategory = async () => {
        const response = await axios.get("http://localhost:3010/getcategory");
        setCategorydata(response?.data?.alldata || []);
      };

      useEffect(() => {
        getallcategory();
      }, []);
return(
    <CategoryContext.Provider value={{categorydata,setCategorydata}}>
        {children}
    </CategoryContext.Provider>
)
}