import React from "react";
import '../styles/Navbar.css'
function topNavBar(){
    return(
      <>
        <div className="top-navbar">
            <div className="nav-button">
            <div className="left-nav">
              <i className="fa fa-angle-left" ></i>
            </div>
            <div className="right-nav">
              <i className="fa fa-angle-right" style={{fontSize:"24px" ,color:"grey"}}></i>
            </div>
        </div>
        <div className="navbar-signin">
              <span><a className="signin_"> Sign in</a></span>
        </div>
        <div className="submit-Btn">
             <span><button  onclick="togglePopup()" type="submit" className="submitBtn">Log in</button></span>
             <span><a><ion-icon name="log-in-outline"></ion-icon></a></span>
              {/* </a></span> */}
        </div>
       </div>
      </> 
    )
}
export default topNavBar;