import React ,{useRef, useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { Searchcontents } from "../helpers/searchcard";
import {Card} from "../components/card"
import img1 from "../assets/img/bp.jpeg";
import '../styles/search.css'
function Search() {
    
    return(
    <>
    <Navbar  showSearch={true}/>
    <div class="Searchbody">
        <div class="Search-row-name">
            <p>Recent searches</p>
        </div>
        <div class="Search-card-container2">
            <div class="Search-card2">
                    <img src={img1} alt=""/>
                    <div>BLACKPINK</div>
                    <p>Artist</p>
            </div>
        </div>
        <div class="Search-row-name2">
                <p>Browse all</p>
        </div>
        <div class="Search-card">
        {Searchcontents.browse.map((song, index) => {
              return (
                <div class="Search-card-content" >
                  <Card
                    key={`card-${index}`}
                    image={song.image}
                    title={song.title}
                    backgroundcolor={song.backgroundColor}
                  ></Card>
                </div>
              );
            })}
        </div>
    </div>
    <Footer/>
    </>
)}
export default Search;