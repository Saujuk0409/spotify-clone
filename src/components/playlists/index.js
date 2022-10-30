import { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import styles from "./playlist.css";
import noimg from "../../assets/img/noimg.png"

const Playlists = ({ playlists }) => {
	return (
        <>
		<Fragment>
			{playlists.map((playlist) => (
				<Link key={playlist._id} to={`/playlist/${playlist._id}`}>
					<div className="playlist">
						{playlist.img === "" ? (
							<img
								src={noimg}
								alt={playlist.name}
								style={{ background: "#6a6a6a" }}
							/>
						) : (
							<img src={playlist.img} alt={playlist.name} />
						)}
						<p>{playlist.name}</p>
						<span>{playlist.desc}</span>
					</div>
				</Link>
			))}
		</Fragment>
        </>
	);
};

export default Playlists;