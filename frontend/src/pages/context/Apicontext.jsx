import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Apicontext=createContext()


export const Apidatacontext=({children})=>{
    const[data,setdataa]=useState([])
    const[checked,setchecked]=useState([])
    const[pricedataa,setpricedata]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
        const apidatafetched=async()=>{
            const {data}= await axios.get("http://localhost:3010/getallproduct&limit=9")
                setdataa(data?.productdataget)
        }

        useEffect(() => {
          fetchProducts();
        }, [currentPage]); // Fetch products when currentPage changes

        const fetchProducts = async () => {
          try {
            const {data} = await axios.get(`http://localhost:3010/getpaginatedproducts?page=${currentPage}&limit=9`);
            setdataa(data?.products);
            setTotalPages(data?.totalPages);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };

    const filtergetall=async()=>{
        const {data}=await axios.post("http://localhost:3010/filterproduct",{checked,pricedataa})
        setdataa(data?.productfilterdata)
        // setCurrentPage(1)
      }

      useEffect(()=>{
        if(checked.length || pricedataa.length){
          filtergetall()
        }else{
          apidatafetched()
        }
      },[checked,pricedataa])

    return(
    <Apicontext.Provider value={{data,setdataa,checked,setchecked,pricedataa,setpricedata,currentPage,setCurrentPage,totalPages,setTotalPages}}>
         {children}
    </Apicontext.Provider>

    )

}