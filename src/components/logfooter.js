import React, { useState } from "react";
import img1 from '../assets/img/controllerimg1.jpeg'
import "../styles/LogFooter.css"
function LogFooter()
{
    const [play,setPlayState]=useState(true);
    const updatePlayState = () => {
        setPlayState((play)=> !play)
    }
    return(
        <div class="ftr-content">
            <div class="ftr-left">
                <img src={img1} alt=""></img>
                <div class="currplaying">
                    <div class="currplayingsong">
                        <a href="#">Look at you</a>
                    </div>
                    <div class="currplayingart">
                        <a href="#">Taylor swift</a>
                    </div>
                </div>
                <div class="likebtn">
                    <i class="fa-regular fa-heart"></i>
                    <path d="M 15.724 4.22 A 4.313 4.313 0 0 0 12.192 0.814 a 4.269 4.269 0 0 0 -3.622 1.13 a 0.837 0.837 0 0 1 -1.14 0 a 4.272 4.272 0 0 0 -6.21 5.855 l 5.916 7.05 a 1.128 1.128 0 0 0 1.727 0 l 5.916 -7.05 a 4.228 4.228 0 0 0 0.945 -3.577 Z"/>
                </div>
            </div>
            <div class="playercontrols">
                <div class="pcupper">
                    <div class="pcupleft" style={{color: "#b3b3b3"}}>
                        <div class="shuffle">
                            <svg fill="currentColor" style={{height: "16px", width:"16px",color:"green",backgroundColor:"black"}}>
                                <path d="M 13.151 0.922 a 0.75 0.75 0 1 0 -1.06 1.06 L 13.109 3 H 11.16 a 3.75 3.75 0 0 0 -2.873 1.34 l -6.173 7.356 A 2.25 2.25 0 0 1 0.39 12.5 H 0 V 14 h 0.391 a 3.75 3.75 0 0 0 2.873 -1.34 l 6.173 -7.356 a 2.25 2.25 0 0 1 1.724 -0.804 h 1.947 l -1.017 1.018 a 0.75 0.75 0 0 0 1.06 1.06 L 15.98 3.75 L 13.15 0.922 Z M 0.391 3.5 H 0 V 2 h 0.391 c 1.109 0 2.16 0.49 2.873 1.34 L 4.89 5.277 l -0.979 1.167 l -1.796 -2.14 A 2.25 2.25 0 0 0 0.39 3.5 Z"/>
                            </svg>
                        </div>
                        <div class="playbtn">
                            <svg fill="currentColor" style={{height: "16px", width:"16px",color:"#b3b3b3",backgroundColor:"black"}}>
                                <path d="M 3.3 1 a 0.7 0.7 0 0 1 0.7 0.7 v 5.15 l 9.95 -5.744 a 0.7 0.7 0 0 1 1.05 0.606 v 12.575 a 0.7 0.7 0 0 1 -1.05 0.607 L 4 9.149 V 14.3 a 0.7 0.7 0 0 1 -0.7 0.7 H 1.7 a 0.7 0.7 0 0 1 -0.7 -0.7 V 1.7 a 0.7 0.7 0 0 1 0.7 -0.7 h 1.6 Z"/>
                            </svg>
                        </div>
                    </div>
                    <button class="middlebtn" onClick={updatePlayState}>
                        {play?<><svg fill="currentColor" style={{height: "16px", width:"16px",color:"black",backgroundColor:"white"}}>
                            <path d="M 3 1.713 a 0.7 0.7 0 0 1 1.05 -0.607 l 10.89 6.288 a 0.7 0.7 0 0 1 0 1.212 L 4.05 14.894 A 0.7 0.7 0 0 1 3 14.288 V 1.713 Z"/>
                        </svg></>:<><i class="fa-solid fa-pause" style={{backgroundColor:"white"}}></i></>}
                        
                        
                    </button>
                    <div class="pcupright">
                        <div class="forwardbtn">
                            <svg fill="currentColor" style={{height: "16px", width:"16px",color:"#b3b3b3",backgroundColor:"black"}}>
                                <path d="M 12.7 1 a 0.7 0.7 0 0 0 -0.7 0.7 v 5.15 L 2.05 1.107 A 0.7 0.7 0 0 0 1 1.712 v 12.575 a 0.7 0.7 0 0 0 1.05 0.607 L 12 9.149 V 14.3 a 0.7 0.7 0 0 0 0.7 0.7 h 1.6 a 0.7 0.7 0 0 0 0.7 -0.7 V 1.7 a 0.7 0.7 0 0 0 -0.7 -0.7 h -1.6 Z"/>
                            </svg>

                        </div>
                        <div class="repeatbtn">
                            <svg fill="currentColor" style={{height: "16px", width:"16px",color:"#b3b3b3",backgroundColor:"black"}}>
                                <path d="M 0 4.75 A 3.75 3.75 0 0 1 3.75 1 h 8.5 A 3.75 3.75 0 0 1 16 4.75 v 5 a 3.75 3.75 0 0 1 -3.75 3.75 H 9.81 l 1.018 1.018 a 0.75 0.75 0 1 1 -1.06 1.06 L 6.939 12.75 l 2.829 -2.828 a 0.75 0.75 0 1 1 1.06 1.06 L 9.811 12 h 2.439 a 2.25 2.25 0 0 0 2.25 -2.25 v -5 a 2.25 2.25 0 0 0 -2.25 -2.25 h -8.5 A 2.25 2.25 0 0 0 1.5 4.75 v 5 A 2.25 2.25 0 0 0 3.75 12 H 5 v 1.5 H 3.75 A 3.75 3.75 0 0 1 0 9.75 v -5 Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="pcdown">
                    <span class="time" style={{color: "white"}}>1:57</span>
                    <div class="track-wrap">
                        <div class="track-bar"></div>
                    </div>
                    <span class="time">4:20</span>
                </div>
            </div>
            <div class="left">
                <div class="mic">
                    <svg fill="currentColor" style={{height: "16px", width:"16px",color:"#b3b3b3",backgroundColor:"black"}}>
                        <path d="M 13.426 2.574 a 2.831 2.831 0 0 0 -4.797 1.55 l 3.247 3.247 a 2.831 2.831 0 0 0 1.55 -4.797 Z M 10.5 8.118 l -2.619 -2.62 A 63303.1 63303.1 0 0 0 4.74 9.075 L 2.065 12.12 a 1.287 1.287 0 0 0 1.816 1.816 l 3.06 -2.688 l 3.56 -3.129 Z M 7.12 4.094 a 4.331 4.331 0 1 1 4.786 4.786 l -3.974 3.493 l -3.06 2.689 a 2.787 2.787 0 0 1 -3.933 -3.933 l 2.676 -3.045 l 3.505 -3.99 Z"/>
                    </svg>
                </div>
                <div class="mic">
                    <svg fill="currentColor" style={{height: "16px", width:"16px",color:"#b3b3b3",backgroundColor:"black"}}>
                        <path d="M 15 15 H 1 v -1.5 h 14 V 15 Z m 0 -4.5 H 1 V 9 h 14 v 1.5 Z m -14 -7 A 2.5 2.5 0 0 1 3.5 1 h 9 a 2.5 2.5 0 0 1 0 5 h -9 A 2.5 2.5 0 0 1 1 3.5 Z m 2.5 -1 a 1 1 0 0 0 0 2 h 9 a 1 1 0 1 0 0 -2 h -9 Z"/>
                    </svg>
                </div>
                <div class="mic">
                    <svg fill="currentColor" style={{height: "16px", width:"16px",color:"#b3b3b3",backgroundColor:"black"}}>
                        <path d="M 4.75 0 A 1.75 1.75 0 0 0 3 1.75 v 12.5 c 0 0.966 0.784 1.75 1.75 1.75 h 6.5 A 1.75 1.75 0 0 0 13 14.25 V 1.75 A 1.75 1.75 0 0 0 11.25 0 h -6.5 Z M 4.5 1.75 a 0.25 0.25 0 0 1 0.25 -0.25 h 6.5 a 0.25 0.25 0 0 1 0.25 0.25 v 12.5 a 0.25 0.25 0 0 1 -0.25 0.25 h -6.5 a 0.25 0.25 0 0 1 -0.25 -0.25 V 1.75 Z"/>
                    </svg>
                </div>
                <div class="mic">
                    <svg fill="currentColor" style={{height: "16px", width:"16px",color:"#b3b3b3",backgroundColor:"black"}}>
                        <path d="M 9.741 0.85 a 0.75 0.75 0 0 1 0.375 0.65 v 13 a 0.75 0.75 0 0 1 -1.125 0.65 l -6.925 -4 a 3.642 3.642 0 0 1 -1.33 -4.967 a 3.639 3.639 0 0 1 1.33 -1.332 l 6.925 -4 a 0.75 0.75 0 0 1 0.75 0 Z m -6.924 5.3 a 2.139 2.139 0 0 0 0 3.7 l 5.8 3.35 V 2.8 l -5.8 3.35 Z m 8.683 4.29 V 5.56 a 2.75 2.75 0 0 1 0 4.88 Z"/>
                    </svg>
                </div>
                <div class="mic1" style={{color: "white"}}>
                    <div class="track-wrap">
                        <div class="track-bar"></div>
                    </div>
                </div>
            </div>
    </div>
    );
}
export default LogFooter;