import { createContext,useEffect,useState} from "react";


export const Cartcontext=createContext()

export const Cartcontextprovider=({children})=>{
    const[cartdata,setcartdata]=useState([])


    const handlecart=(item)=>{
        setcartdata(item),
        localStorage.setItem("cart",JSON.stringify([...cartdata,]))
    }

  const deletedata=()=>{
    setcartdata([])
    localStorage.removeItem("cart")
  }

    useEffect(()=>{
        const existcart=localStorage.getItem("cart")
        if(existcart) setcartdata(JSON.parse(existcart))
    },[])

    return(
        <Cartcontext.Provider value={{cartdata,handlecart,deletedata,setcartdata}}>
            {children}
        </Cartcontext.Provider>
    )
}