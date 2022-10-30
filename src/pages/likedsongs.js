import { Fragment } from "react";
import Song from "../components/song";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "../styles/likedsongs.css";
import likeImg from "../assets/img/like.jpg";
import peaches from "../assets/img/mood1.jpeg";
import Navbar from "../components/Navbar";

const songs = [
	{ _id: 1, img: peaches, name: "Peaches", artist: "Justin Bieber" ,album:"solo album",lastadded:"5days ago"},
    { _id: 2, img: peaches, name: "Peaches", artist: "Justin Bieber" ,album:"solo album",lastadded:"5days ago"},
    { _id: 3, img: peaches, name: "Peaches", artist: "Justin Bieber" ,album:"solo album",lastadded:"5days ago"},
    { _id: 4, img: peaches, name: "Peaches", artist: "Justin Bieber" ,album:"solo album",lastadded:"5days ago"},
    { _id: 5, img: peaches, name: "Peaches", artist: "Justin Bieber" ,album:"solo album",lastadded:"5days ago"},
    { _id: 6, img: peaches, name: "Peaches", artist: "Justin Bieber" ,album:"solo album",lastadded:"5days ago"},
    { _id: 7, img: peaches, name: "Peaches", artist: "Justin Bieber" ,album:"solo album",lastadded:"5days ago"},
    { _id: 8, img: peaches, name: "Peaches", artist: "Justin Bieber" ,album:"solo album",lastadded:"5days ago"},
    { _id: 9, img: peaches, name: "Peaches", artist: "Justin Bieber" ,album:"solo album",lastadded:"5days ago"},
    { _id: 10, img: peaches, name: "Peaches", artist: "Justin Bieber" ,album:"solo album",lastadded:"5days ago"},
];

const LikedSongs = () => {
	return (
        <>
        <Navbar/>
		<div className="slcontainer">
			<div className="head">
				<div className="head_gradient"></div>
				<img src={likeImg} alt="like songs" />
				<div className="playlist_info">
					<p>Playlist</p>
					<h1>Liked Songs</h1>
					<span>By Jahangeer</span>
				</div>
			</div>
			<div className="lsbody">
				<div className="body_nav">
					<div className="slleft">
						<span>#</span>
						<p>Title</p>
					</div>
					<div className="center">
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
        </>
	);
};

export default LikedSongs;