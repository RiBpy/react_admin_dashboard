import React, { useState } from 'react'
import "./SingleData.css"
const SingleData = ({singlePhone,filter}) => {
    // const [phoneObj,setPhoneObj]=useState(singlePhone)
    // if(filter==="all"){
    //   setPhoneObj(singlePhone)
    // }
    // const updatedList=phoneObj.filter(obj=>{
    //     console.log(obj.seller)
    //     return obj.seller===filter
    // })
    // setPhoneObj(updatedList)
  return (
    <div>
        <table className="table">
            <thead className='text-secondary'>
                <tr>
                <th scope="col">Model</th>
                <th scope="col">Ram/Rom</th>
                <th scope="col">Tags</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
           { 
           
           singlePhone.map((dataObj)=>{
            return (
            <tbody >
                <tr key={dataObj.id}>
                    <td className='d-flex'>
                        <img src={dataObj.img} className='img-fluid product_img' alt=""/>
                        <div >
                        <h5>{dataObj.title}</h5>
                        <p className='text-secondary'>{dataObj.brand}</p>
                        </div>
                    </td>
                    <td className='text-secondary'>{dataObj.ram}/{dataObj.rom}</td>
                    <td className='tags'>
                        {
                               (dataObj.price<=20000 && dataObj?.ram>=4 && dataObj?.rom>=64 && (dataObj?.brand ==="Xiaomi" || dataObj?.brand ==="Realme")  || dataObj.tags==="best_value" )&&
                               <button className=' btn mx-1 bestCam'>Best Value</button>
                        }{
                            (dataObj?.rearCam?.split("\n").length>=3 && (dataObj?.selfieCam?.split(",")[0]?.split(" ")[0]>=13 && dataObj?.rearCam?.split(",")[0]?.split(" ")[0]>=16) && dataObj.more64 && dataObj?.microSD?.includes("microSDXC") || dataObj.tags==="best_camera") &&
                            <button className='btn mx-1 bestVal'>Best Camera</button>
                        }{
                            (
                                dataObj?.chipset?.includes("Snapdragon") && dataObj?.price>20000 && dataObj?.more4 && dataObj?.rom>=128 && (dataObj?.display?.includes("AMOLED") && dataObj?.displayRes?.includes("1080") ) || dataObj.tags==="best_performance"   
                            )&&
                        <button className='btn mx-1 bestPer'>Best performance</button>
                        }
                        
                        
                    </td>
                    <td className='text-secondary'>{dataObj.price}</td>
                </tr>
            </tbody>
             )
           })}
        
       </table>
    </div>
  )
}

export default SingleData