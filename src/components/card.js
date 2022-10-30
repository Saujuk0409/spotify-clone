import React from "react";                                                                                                                                                                                                                                                                                                                                                                                                                                              
import reportWebVitals from "../reportWebVitals";
import '../styles/body.css'

export const Card=(props)=>{
    return <>
     <div className="card-content">                                                                                                                                                                                                                                                                                                                             
                    <span>{props.title}</span>
                    <div style={{backgroundColor:'white'}}>
                    <img class="myimg" src={props.image} alt=""/>
                    </div>
        </div></>;
}            