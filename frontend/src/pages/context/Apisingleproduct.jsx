import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Apisingle=createContext()

export const ApiSingleproduct=({children})=>{
    const navigate=useNavigate()
    const[product,setproduct]=useState(null)

    const handleclick=async(_id)=>{
        const single=await axios.get(`http://localhost:3010/singleproduct/:id`)
        const productdata=single.data.singledata
        console.log(single.data.singledata)

        setproduct(productdata)
        navigate(`/singleproduct/${productdata._id}`);
      }
    return(
        <Apisingle.Provider  value={{product,setproduct,handleclick}}>
            {children}
        </Apisingle.Provider>
    )
}
