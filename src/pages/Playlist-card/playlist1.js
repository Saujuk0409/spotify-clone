import { Fragment } from "react";
import Song from "../../components/song";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "../../styles/likedsongs.css";
import likeImg from "../../assets/img/like.jpg";
import peaches from "../../assets/img/mood1.jpeg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";

const songs = [
  {
    _id: 1,
    img: peaches,
    name: "Peaches",
    artist: "Justin Bieber",
    album: "solo album",
    lastadded: "5days ago",
  },
  {
    _id: 2,
    img: peaches,
    name: "Peaches",
    artist: "Justin Bieber",
    album: "solo album",
    lastadded: "5days ago",
  },
  {
    _id: 3,
    img: peaches,
    name: "Peaches",
    artist: "Justin Bieber",
    album: "solo album",
    lastadded: "5days ago",
  },
  {
    _id: 4,
    img: peaches,
    name: "Peaches",
    artist: "Justin Bieber",
    album: "solo album",
    lastadded: "5days ago",
  },
  {
    _id: 5,
    img: peaches,
    name: "Peaches",
    artist: "Justin Bieber",
    album: "solo album",
    lastadded: "5days ago",
  },
  {
    _id: 6,
    img: peaches,
    name: "Peaches",
    artist: "Justin Bieber",
    album: "solo album",
    lastadded: "5days ago",
  },
  {
    _id: 7,
    img: peaches,
    name: "Peaches",
    artist: "Justin Bieber",
    album: "solo album",
    lastadded: "5days ago",
  },
  {
    _id: 8,
    img: peaches,
    name: "Peaches",
    artist: "Justin Bieber",
    album: "solo album",
    lastadded: "5days ago",
  },
  {
    _id: 9,
    img: peaches,
    name: "Peaches",
    artist: "Justin Bieber",
    album: "solo album",
    lastadded: "5days ago",
  },
  {
    _id: 10,
    img: peaches,
    name: "Peaches",
    artist: "Justin Bieber",
    album: "solo album",
    lastadded: "5days ago",
  },
];

const Playlist1 = () => {
  return (
    <>
      <Navbar />
      <div className="slcontainer">
        <div className="slhead">
          <div className="slhead_gradient"></div>
          <img src={likeImg} alt="like songs" />
          <div className="slplaylist_info">
            <p>Playlist</p>
            <h1>Liked Songs</h1>
            <span>By Saujanya</span>
          </div>
        </div>
        <div className="lsbody">
          <div className="lsbody_nav">
            <div className="slleft">
              <span>#</span>
              <p>Title</p>
            </div>
            <div className="lscenter">
              <p>Album</p>
            </div>
            <div className="slcentre-right">
              <p>Date added</p>
            </div>
            <div className="slright">
              <AccessTimeIcon />
              {/* <i class="fa fa-clock-o" aria-hidden="true"></i> */}
            </div>
          </div>

          {songs.map((song) => (
            <Fragment key={song._id}>
              <Song song={song} />
            </Fragment>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Playlist1;
