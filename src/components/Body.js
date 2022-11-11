import { Fragment } from "react";
import Playlists from "../components/playlists/index";
import "../styles/Home.css";
import playlistImg from "../assets/img/playlist1.jpeg";
import Navbar from "./Navbar";
import img1 from "../assets/img/focus1.jpeg";
import img2 from "../assets/img/focus2.jpeg";
import img3 from "../assets/img/focus3.jpeg";
import img4 from "../assets/img/focus4.jpeg";
import img5 from "../assets/img/focus5.jpeg";
import img6 from "../assets/img/focus6.jpeg";
import img7 from "../assets/img/focus7.jpeg";
import img8 from "../assets/img/focus8.jpeg";
import img9 from "../assets/img/mood1.jpeg";
import img10 from "../assets/img/mood2.jpeg";
import img12 from "../assets/img/mood3.jpeg";
import img11 from "../assets/img/mood4.jpeg";
import img13 from "../assets/img/mood5.jpeg";
import img14 from "../assets/img/mood6.jpeg";
const playlists = [
	{ _id: 1, img: img8, name: "Today's Top Songs", desc: "Today is made by you " },
    { _id: 2, img: img9, name: "Today's ", desc: "By Jahangeer " },
    { _id: 3, img: img10, name: "Today's Top Songs", desc: "By Jahangeer" },
    { _id: 4, img: img11, name: "Today's Top Songs", desc: "By Jahangeer" },
    { _id: 5, img: img12, name: "Today's Top Songs", desc: "By Jahangeer" },
    { _id: 6, img: img13, name: "Today's Top Songs", desc: "By Jahangeer" },
    { _id: 7, img: img14, name: "Today's Top Songs", desc: "By Jahangeer" },
    { _id: 8, img: img14, name: "Today's Top Songs", desc: "By Jahangeer" },
];
const focus = [
	{ _id: 9, img: img1, name: "Today's Top Songs", desc: "Sam Smith is on top of the play.." },
    { _id: 10, img: img2, name: "Today's Top Songs", desc: "Sam Smith is on top of the playlist.." },
    { _id: 11, img: img3, name: "Today's Top Songs", desc: "Sam Smith is on top of the playlist.." },
    { _id: 12, img: img4, name: "Today's Top Songs", desc: "Sam Smith is on top of the playlist.." },
    { _id: 13, img: img5, name: "Today's Top Songs", desc: "Sam Smith is on top of the playlist.." },
    { _id: 14, img: img6, name: "Today's Top Songs", desc: "Sam Smith is on top of the playlist.." },
    { _id: 15, img: img7, name: "Today's Top Songs", desc: "Sam Smith is on top of the playlist.." },
	{ _id: 16, img: img8, name: "Today's Top Songs", desc: "Today is made by you " },

];


const Body = () => {
    return (
        <>
        <Navbar showSearch={false}/>
		<Fragment>
			<div className="h-container">
                
				<h3 className="firsth1">Focus</h3>
				<div className="playlists_container">
					<Playlists playlists={playlists} />
				</div>
				<h1>Just the hits</h1>
				<div className="playlists_container">
					<Playlists playlists={focus} />
				</div>
                <h1>Just the hits</h1>
                <div className="playlists_container">
					<Playlists playlists={focus} />
				</div>
                <h1>Just the hits</h1>
                <div className="playlists_container">
					<Playlists playlists={focus} />
				</div>
                <h1>Just the hits</h1>
                <div className="playlists_container">
					<Playlists playlists={focus} />
				</div>

			</div>
		</Fragment>
        </>
	);
};

export default Body;