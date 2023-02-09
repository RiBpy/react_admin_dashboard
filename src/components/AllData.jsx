import React, { useState } from 'react'
import SingleData from './SingleData'
const AllData = ({singlePhone}) => {
const [filter ,setFilter]=useState("all")
  const handleFilter=(e)=>{
     setFilter(e.value)
  }
  return (
    <div>
        <div className='col-md-12 d-flex justify-content-between my-3'>
            <h5 className='fw-bold'>All Products</h5>
            <div className="d-flex">
                <label  className="form-label fw-bold mx-2">Short By: </label>
                <select className="" id="validationCustom04" name="tag" onChange={(e)=> handleFilter(e.target)}> 
                  <option value="all">All Products</option>
                  <option  value="best_value">Best Value</option>
                  <option  value="best_performance">Best Performance</option>
                  <option  value="best_camera">Best Camera</option>
                </select>
            </div>
        </div>
        <div className="row">
            <SingleData singlePhone={singlePhone} filter={filter}/>
        </div>
    </div>
  )
}

export default AllData