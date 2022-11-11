import { Link } from "react-router-dom";
import Playlists from "../components/playlists";
import playlistImg from "../assets/img/rock.jpg";
import img1 from "../assets/img/libimg.jpeg"
import img2 from "../assets/img/mood5.jpeg"
import  "../styles/library.css";
import Navbar from "../components/Navbar";

const playlists = [
	{ _id: 1, img: playlistImg, name: "My playlist #3", desc: "By Sauju" },
  { _id: 2, img: "" ,name: "Today's Top Songs", desc: "By Jahangeer"},
  { _id: 1, img: img1, name: "My playlist #3", desc: "By Sauju" },
  { _id: 1, img: img2, name: "My playlist #3", desc: "By Sauju" },
  { _id: 1, img: img1, name: "My playlist #3", desc: "By Sauju" },
  { _id: 1, img: img2, name: "My playlist #3", desc: "By Sauju" },
  { _id: 1, img: img1, name: "My playlist #3", desc: "By Sauju" },
  { _id: 1, img: img2, name: "My playlist #3", desc: "By Sauju" },
  { _id: 1, img: img1, name: "My playlist #3", desc: "By Sauju" },
  { _id: 1, img: img2, name: "My playlist #3", desc: "By Sauju" },

];

const Library = () => {
	return (
    <>
    <Navbar/>
	<div className="lib-container">
			<h1>Playlists</h1>
			<div className="playlists_container">
				<Link to="/collection/tracks" style={{textDecoration:'none'}}>
					<div className="liked_songs">
						<h1>Liked Songs</h1>
						<p>1 liked songs</p>
					</div>
				</Link>
				<Playlists playlists={playlists} />
			</div>
		</div>
    </>
	);
};

export default Library;
