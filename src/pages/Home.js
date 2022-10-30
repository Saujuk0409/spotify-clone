import React, { component } from "react";
import { Link } from "react-router-dom";
import { contents } from "../helpers/cardList";
// import RouterProvider from "../RouterProvider";
import { SongCard } from "../components/SongCard";
// import CardItem from ".src/helpers/CardItems";
import Footer from "../components/footer";
import "../styles/body.css";
import Navbar from "../components/Navbar.js";
function Home() {
  
  return (
    <>
      <Navbar />
      <div className="body">
        <div className="main-content1">
          <div className="row-name">
            <h3 className="tile">FOCUS</h3>
            <p className="see-all">SEE ALL</p>
          </div>
          <div class="display-row" style={{ display: "flex" }}>
            {contents.focus.map((song, index) => {
              return (
                <div class="card-container">
                  <SongCard
                    key={`card-${index}`}
                    image={song.image}
                    title={song.title}
                    desc={song.desc}
                  ></SongCard>
                </div>
              );
            })}
          </div>
        </div>
        <div class="main-content">
          <div class="row-name">
            <h3 class="tile">Mood</h3>
            <p class="see-all">SEE ALL</p>
          </div>
          <div class="display-row" style={{ display: "flex" }}>
            {contents.mood.map((song, index) => {
              return (
                <>
                  <div class="card-container">
                    <SongCard
                      key={index}
                      image={song.image}
                      title={song.title}
                      desc={song.desc}
                    ></SongCard>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div class="main-content">
          <div class="row-name">
            <h3 class="tile">Artists</h3>
            <p class="see-all">SEE ALL</p>
          </div>
          <div class="display-row" style={{ display: "flex" }}>
            {contents.artist.map((song, index) => {
              return (
                <>
                  <div class="card-container">
                    <SongCard
                      key={index}
                      image={song.image}
                      title={song.title}
                      desc={song.desc}
                    ></SongCard>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div class="main-content">
          <div class="row-name">
            <h3 class="tile">Unique</h3>
            <p class="see-all">SEE ALL</p>
          </div>
          <div class="display-row" style={{ display: "flex" }}>
            {contents.playlist.map((song, index) => {
              return (
                <>
                  <div class="card-container">
                    <SongCard
                      key={index}
                      image={song.image}
                      title={song.title}
                      desc={song.desc}
                    ></SongCard>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
