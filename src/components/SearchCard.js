import React from "react";                                                                                                                                                                                                                                                                                                                                                                                                                                              
import '../styles/body.css'

export const SongCard=(props)=>{
    return <>
     <div className="card" style={{}}>                                                                                                                                                                                                                                                                                                                             
                    <img class="myimg" src={props.image} alt=""/>
                    <div>{props.title}</div>
                    <p>{props.desc}</p>
        </div></>;
}    