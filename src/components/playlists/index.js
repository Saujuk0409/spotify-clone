import { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "./playlist.css";
import noimg from "../../assets/img/noimg.png"
import {getplayList} from "../../services/playlist"


const Playlists = ({ playlists }) => {

	const handleGetPlaylist = async() => {
		console.log("getplaylist")
		const playlists=await getplayList();
	}

	return (
        <>
		<Fragment>
			{playlists.map((playlist) => (
				<Link key={playlist._id} to={`/playlist/songs`}>
					<div className="playlist" style={{overflow:"hidden"}} onClick={handleGetPlaylist}>
						{playlist.img === "" ? (
							<img
								src={noimg}
								alt={playlist.name}
								style={{ background: "#6a6a6a" }}
							/>
						) : (
							<img src={playlist.img} alt={playlist.name} />
						)}
						<p style={{overflow:"hidden"}}>{playlist.name}</p>
						<span>{playlist.desc}</span>
					</div>
				</Link>
			))}
		</Fragment>
        </>
	);
};

export default Playlists;