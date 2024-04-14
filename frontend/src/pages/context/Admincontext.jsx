
import { createContext, useEffect, useState } from "react";

export const AdminContext=createContext()

export const AdminDataContext=({children})=>{
    const[authadmin,setauthadmin]=useState({
        admin:null,
        admintoken:""
    })

    useEffect(()=>{
       const admindata= localStorage.getItem("admintoken")
       if(admindata){
        const authenticateadmin= JSON.parse(admindata)
        console.log(authenticateadmin)
        setauthadmin((prevdata)=>({
            ...prevdata,
            admin:authenticateadmin.admin,
            admintoken:authenticateadmin.admintoken
        }))
       }
    },[])
    return(
        <AdminContext.Provider value={{authadmin,setauthadmin}}>
            {children}
        </AdminContext.Provider>
    )
}