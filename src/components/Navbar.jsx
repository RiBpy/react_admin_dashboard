import React, { useState } from "react";
import "./Navbar.css"
import AddData from "./AddData";
import SearchForm from "./SearchForm";
const Navbar=({onSubmit,setPhoneObject})=>{
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <div className="logo col-sm-2 col-md-5">
                    <h5 className="text-light fw-bold">LOGO</h5>
                </div>
                 <div className="col-sm-10 col-md-7 ">
                    <div className="d-flex justify-content-end ">
                        <SearchForm onSubmit={onSubmit}/>
                        <AddData setPhoneObject={setPhoneObject}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
