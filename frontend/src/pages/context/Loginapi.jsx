import { createContext, useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';

export const LoginContext=createContext()


export const ApiDataContext=({children})=>{
 const[auth,setauth]=useState({
    user:null,
    jwttoken:""
 })

 axios.defaults.headers.common['Authorization']=auth?.token


 useEffect(()=>{
   const parsedata=localStorage.getItem("token")
 if(parsedata){
    const dataparse=JSON.parse(parsedata)

    setauth({
        ...auth,
        user:dataparse.user,
        jwttoken:dataparse.jwttoken
    })
 }
 },[])
 const handlelogout=()=>{
   try {
    setauth({
        ...auth,
        user:null,
        jwttoken:""
      })

      localStorage.removeItem("token")
toast.success("logout successfully")
   } catch (error) {
 toast.error("logout unsuccessfull")
   }
  }


    return(
        <LoginContext.Provider value={{auth,setauth,handlelogout}}>
            {children}
        </LoginContext.Provider>
    )
}


