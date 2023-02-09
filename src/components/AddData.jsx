import React, { useState } from 'react'
import "./AddData.css"
import {AiOutlineCloseCircle} from "react-icons/ai"
import {MdOutlinePublishedWithChanges} from "react-icons/md"
function AddData({setPhoneObject}) {
    const [newData,setNewData]=useState({})
    const handleChange=(e)=>{
       setNewData(prevState=>({
        ...prevState,
        [e.name]:e.value
       }))
    }
   const handleSubmit =(e)=>{
     e.preventDefault()
     setPhoneObject(prev=>(
        [
           
            newData,
            ...prev,
        ]
     ))
     setNewData({})
   }
  return (
     <div>
        <button className="btn btn-light px-3 add_btn" data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit">Add Product</button>
        <div className="modal fade " id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add Product</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form className="row mx-2 my-3">
                    <div className="col-md-12 my-2">
                        <label  className="form-label" >Product name</label>
                        <input type="text" className="form-control" name="model" value ={newData.model??""} id="validationCustom01" placeholder='Enter your product name' required onChange={(e)=> handleChange(e.target)} />
                    </div>
                    <div className="col-md-6 my-2">
                        <label  className="form-label">Brand</label>
                        <input type="text" className="form-control" name="brand" value ={newData.brand??""} id="validationCustom02" placeholder='Enter brand name' required onChange={(e)=> handleChange(e.target)}/>
                    </div>
                    <div className="col-md-3 my-2">
                        <label  className="form-label">Ram</label>
                        <input type="text" className="form-control" name="ram" value ={newData.ram??""} id="validationCustom02" placeholder='Ram' required onChange={(e)=> handleChange(e.target)}/>
                    </div>
                    <div className="col-md-3 my-2">
                        <label  className="form-label">Rom</label>
                        <input type="text" className="form-control" name="rom" value ={newData.rom??""} id="validationCustom02" placeholder='Rom' required onChange={(e)=> handleChange(e.target)}/>
                    </div>
                    <div className="col-md-12">
                        <label  className="form-label">Tags</label>
                        <select className="form-select" id="validationCustom04" name="tag" value ={newData.tag??""} required onChange={(e)=> handleChange(e.target)}>
                        <option value="">Search and Select</option>
                        <option  value="best_value">Best Value</option>
                        <option  value="best_performance">Best Performance</option>
                        <option  value="best_camera">Best Camera</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label  className="form-label">Price</label>
                        <input type="text" className="form-control" id="validationCustom05" name="phone_price" value ={newData.phone_price??""} required placeholder='50,000' onChange={(e)=> handleChange(e.target)}/>
                    </div>
               </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary text-light py-0 px-4" data-bs-dismiss="modal"><AiOutlineCloseCircle/> Cancel</button>
                <button type="submit" className="btn publish py-0 px-4" onClick={handleSubmit} data-bs-dismiss="modal"><MdOutlinePublishedWithChanges/> Publish</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AddData