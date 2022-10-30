import React,{useState} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <div className="side-nav">
                <Link to="/" activeStyle>Home</Link>
                <Link to="/pages/Search" activeStyle>Search</Link>
                <Link to="/pages/Library" activeStyle>Library</Link>
            </div>
        </nav>
    )
}
export default Navbar;