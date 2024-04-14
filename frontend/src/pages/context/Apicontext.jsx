import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Apicontext=createContext()


export const Apidatacontext=({children})=>{
    const[data,setdataa]=useState([])
        const apidatafetched=async()=>{
            const res= await axios.get("http://localhost:3010/getallproduct")
            // console.log(res.data.productdataget,"datajhgfdghj")
                setdataa(res.data.productdataget)
        }

    useEffect(()=>{
        apidatafetched()
    },[])

    return(
    <Apicontext.Provider value={{data,setdataa}}>
         {children}
    </Apicontext.Provider>

    )

}