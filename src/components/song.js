import { useState } from "react";
import Like from "../components/Like";
import { IconButton } from "@mui/material";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../styles/songs.css";
import PlaylistMenu from "../components/PlaylistMenu";

const Song = ({ song, playlist }) => {
	const [menu, setMenu] = useState(false);

	return (
		<>
		<div className="song_container">
			<div className="sleft">
				<p className="songid">{song._id}</p>
				{/* <IconButton className="play_btn">
					<PlayArrowIcon />
				</IconButton> */}
				<img src={song.img} alt="song_img" />
				<div>
					<p className="name">{song.name}</p>
					<p className="artist" style={{color:"#b3b3b3"}}>{song.artist}</p>
				</div>
			</div>
			<div className="scenter">
				<p>{song.album}</p>
			</div>
			<div className="scentre-right">
				<p>{song.lastadded}</p>
			</div>
			<div className="sright">
				<Like songId={song._id}/>
				<p>4.30</p>
				<IconButton className="menu_btn" onClick={() => setMenu(true)}>
					<MoreHorizIcon />
				</IconButton>
				{menu && (
					<PlaylistMenu playlist={playlist} closeMenu={() => setMenu(false)} />
				)}
			</div>
		</div>
		</>
	);
};

export default Song;