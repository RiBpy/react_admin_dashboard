import React,{useState} from "react"
import {FaSearch} from "react-icons/fa"
import "./SearchForm.css"

const SearchForm=({onSubmit})=>{
    const [input,setInput]=useState("")
    const handleSearch=(e)=>{
         setInput(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit(input)
    }
   return (
    <>
     <form className="me-3" role="search" >
        <div className="input-group me-3  ">
            <input className="form-control nav-input border-end-0 border" value={input} type="search" placeholder="Search By Title or Brand" id="example-search-input" onChange={handleSearch}/>
            <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2"><i className="icon" onClick={handleSubmit}><FaSearch/></i></span>
            </div>
        </div>
     </form>
    </>
   )
}
export default SearchForm