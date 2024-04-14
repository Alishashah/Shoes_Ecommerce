import React, { useEffect, useState } from 'react'

const useFooterWindow = () => {
    const[windowsize,setwindowsize] = useState({
        width:undefined,
      height:undefined
    })
      useEffect(()=>{
            const handleresize = ()=>{
                setwindowsize({
                    width:window.innerWidth,
                    height:window.innerHeight
                })
            }
            window.addEventListener("resize",handleresize)
            handleresize()
            return ()=> window.removeEventListener("resize", handleresize   )

      },[])
      return windowsize;

}

export default useFooterWindow