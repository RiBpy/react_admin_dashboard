import React, {useContext, useEffect, useState } from "react";
import Data from './db';
const AppContext = React.createContext();
const AppProvider=({children})=>{
    const [singlePhone,setSinglePhone]=useState({})
    console.log(singlePhone[0])
    const [loading,setLoading]=useState(true)
    const [searchText,setSearchText]=useState("a")
            let phoneObj=Data.map(item=>{
                return {
                  id:item._id,
                  img:item.phone_images[0],
                  brand:item.brand,
                  title:item.phone_details.model,
                  ram:item.phone_details.ram,
                  rom:item.phone_details.internal_storage,
                  price:item.price,
                  rearCam:item.phone_details.mainCamera,
                  selfieCam:item.phone_details.selfieCamera,
                  microSD:item.phone_details.external,
                  display:item.phone_details.displayType,
                  displayRes:item.phone_details.displayRes,
                  chipset:item.phone_details.chipset
                  
                };
            }
            )
            setSinglePhone(phoneObj)
            setLoading(false)

  
    
    useEffect(()=>{

    },[searchText])
    return (
        <AppContext.Provider value={{loading,singlePhone,searchText,setSearchText}}>
               {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}