import React from "react";
import '../styles/footer.css'
function Footer()
{
    return(
       <div className="ftr">
            <div className="ftr-container">
                <div className="ftr-content">
                    <p className="ftr-line">PREVIEW OF SPOTIFY </p>
                    <p className="ftr-para">
                        Sign up to get unlimeted songs and podcasts with occasional ads.No 
                        credit card needed.
                    </p>
                </div>
                <button className="signupbtn">
                    <span className="span">Sign up free</span>
                </button>
            </div>
       </div>
    );
}
export default Footer;